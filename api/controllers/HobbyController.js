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

// var phone = req.session.phone;
// var email = req.session.email;


module.exports = {

  addhobby: function (req, res) {
    if (req.body.title.trim().length !== 0 && req.body.owner.trim().length !== 0) {
      Hobby.findOrCreate({
        title: req.body.title,
        owner: req.body.owner
      }, {
        title: req.body.title.trim(),
        owner: req.body.owner.trim()
      }, (err, existingHobby, newHobby) => {
        if (err) {
          message = 'Hobby could not be added';
          console.log("Can't add");
        }

        if (newHobby) {
          message = `New Hobby Added - ${req.body.title}`;
          console.log('Added');

          const params = {
            Destination: {
              ToAddresses: [req.session.email],
            },
            ConfigurationSetName: 'DeliveryScience',
            Message: {
              Body: {
                Html: {
                  Charset: 'UTF-8',
                  Data: `<html><body><h1>Hello ${req.session.username}</h1><p>Thank you for using
                                    Sobogun Ifeoluwa's Hobby App.</p>
                                    <p>You have successfully added a new hobby: 
                                    ${req.body.title}</p></body></html>
                                    <h2><i>The more, the merrier</i></h2>`
                },
                Text: {
                  Charset: "UTF-8",
                  Data: `Hello ${req.session.username}, you have added a new hobby`,
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
              console.log('Email submitted to SES', data);
            })
            .catch(error => {
              console.log(error);
            });

          client.messages
            .create({
              body: `Hello, user ${req.session.username}, you have added a new hobby - ${req.body.title}; Sobogun Ifeoluwa, For Delivery Science`,
              from: process.env.TWILIO_PHONE_NUMBER,
              to: `+${req.session.phone}`
            })
            .then(message => {
              console.log(message.sid);
              console.log(req.session.phone);
              //return res.redirect(`https://delivery-science-frontend.herokuapp.com/dashboard?New Hobby Added - ${req.body.title}`);
              return res.json(200, {
                message: `New Hobby Added - ${req.body.title}`
              });
            })
            .catch(error => {
              console.log(error);
              //return res.redirect(`https://delivery-science-frontend.herokuapp.com/dashboard?New Hobby Added - ${req.body.title}`);
              return res.json(200, {
                message: `New Hobby Added - ${req.body.title}`,
                error: error
              });
            });
        } else {

          //return res.redirect(`https://delivery-science-frontend.herokuapp.com/dashboard?You have added ${req.body.title} previously`);
          return res.json(300, {
            message: `You have added ${req.body.title} previously`
          })
        }
      })
    } else {
      //return res.redirect(`https://delivery-science-frontend.herokuapp.com/dashboard?You have entered an invalid hobby, try again`);
      return res.json(400, {
        message: 'Invalid Hobby'
      })
    };
  }
}