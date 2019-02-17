/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var statusMessage;
module.exports = {

  createuser: function (req, res) {
    let data = req.body
    User.findOrCreate({
      username: data.username,
      email: data.email,
    }, {
      username: data.username,
      email: data.email,
      phone: `+${data.phone}`,
      password: data.password
    }, (err, existingUser, newUser) => {
      if (err) {
        statusMessage = 'ERROR ADDING USER, CHECK YOUR DETAILS';
      }
      if (existingUser) {
        statusMessage = 'USER ALREADY EXISTS';
      } 
      if (newUser) {
        statusMessage = 'USER SUCCESSFULLY CREATED';
      }
      res.json({
        statusMessage,
      });
    });

  }

};
