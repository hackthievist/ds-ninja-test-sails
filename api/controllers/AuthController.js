/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');

module.exports = {

  login: function (req, res) {
    passport.authenticate('local', (err, user, info) => {
      if ((err) || (!user)) {
        statusMessage = 'Wrong Credentials';
        return res.redirect('https://delivery-science-frontend.herokuapp.com/login?message=wrongCredentials');
      }

      message = '';
      userId = user.id;
      req.session.userId = user.id;
      username = user.username;
      req.session.username = user.username;
      email = user.email;
      req.session.email = user.email;
      phone = user.phone;
      req.session.phone = user.phone;
      statusMessage = '';
      console.log(req.session);
      res.redirect('https://delivery-science-frontend.herokuapp.com/dashboard');

    })(req, res);

  },

  logout: function (req, res) {
    req.session.destroy();
    req.logout();
    res.redirect('https://delivery-science-frontend.herokuapp.com/login');
  }

};