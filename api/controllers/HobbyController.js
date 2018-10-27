/**
 * HobbyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: 'us-east-1'
});

const ses = new AWS.SES();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const responseObject = {};


module.exports = {

  addhobby: async function (req, res) {
    if (req.body.title.trim().length !== 0 && req.body.owner.trim().length !== 0) {
      user = await User.findOne(req.body.owner);
      if(!user) {
        return res.json(404, 'User not found');
      }
      const hobby = Hobby.findOrCreate({
        title: req.body.title,
        owner: req.body.owner
      }, {
        title: req.body.title.trim(),
        owner: req.body.owner.trim()
      }, (err, existingHobby, newHobby) => {
        if (err) {
          res.json({
            message:'Hobby could not be added',
          })
        }

        if (newHobby) {
          const params = {
            Destination: {
              ToAddresses: [user.email],
            },
            ConfigurationSetName: 'DeliveryScience',
            Message: {
              Body: {
                Html: {
                  Charset: 'UTF-8',
                  Data: `<html><body><h1>Hello ${user.username}</h1><p>Thank you for using
                                    Sobogun Ifeoluwa's Hobby App.</p>
                                    <p>You have successfully added a new hobby: 
                                    ${req.body.title}</p></body></html>
                                    <h2><i>The more, the merrier</i></h2>`
                },
                Text: {
                  Charset: "UTF-8",
                  Data: `Hello ${user.username}, you have added a new hobby`,
                }
              },
              Subject: {
                Charset: "UTF-8",
                Data: "Delivery Science: New Hobby Notification"
              }
            },
            Source: "sobogunifeoluwa@gmail.com"
          };

          const sendEmail = ses.sendEmail(params).promise();

          sendEmail.then(data => {
              Object.assign(responseObject, { emailService: { message: 'Email Sent', data }});
            })
            .catch(error => {
              Object.assign(responseObject, { emailService: { message: 'Email not sent', error }});
            });

          client.messages
            .create({
              body: `Hello, user ${user.username}, you have added a new hobby - ${req.body.title}; Sobogun Ifeoluwa, For Delivery Science`,
              from: process.env.TWILIO_PHONE_NUMBER,
              to: `+${user.phone}`
            })
            .then(message => {
              Object.assign(responseObject, {
                message: `New Hobby Added - ${req.body.title}`,
                textStatus: {
                  status: message.status,
                  SID: message.sid,
                },
                user: owner,
              });
              return res.json(200, responseObject);
            })
            .catch(error => {
              Object.assign(responseObject, {
                message: `New Hobby Added - ${req.body.title}`,
                hobby,
                twilioError: error
              });
              return res.json(200, responseObject);
            });
        } else {
          return res.json({
            message: `You have added ${req.body.title} previously`,
            hobby: existingHobby,
          })
        }
      })
    } else {
      return res.json({
        message: 'Invalid Hobby'
      })
    };
  }
}