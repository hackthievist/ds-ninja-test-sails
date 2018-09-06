/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var statusMessage;
module.exports = {

  createuser: function (req, res) {
    User.findOrCreate({
      username: req.body.username,
      email: req.body.email,
    }, {
      username: req.body.username,
      email: req.body.email,
      phone: `+${req.body.phone}`,
      password: req.body.password
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
      //res.redirect(`https://delivery-science-frontend.herokuapp.com/login?${statusMessage}`);
      res.json({
        statusMessage: statusMessage
      });
    });

  }

};
