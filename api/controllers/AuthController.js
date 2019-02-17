/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');

module.exports = {

  login: async function (req, res) {
    passport.authenticate('local', (err, user, info) => {
      if ((err) || (!user)) {
        statusMessage = 'Wrong Credentials';
        return res.json({
          isAuthenticated: false,
        });
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
      return res.json({
        isAuthenticated: true,
      });

    })(req, res);

  },

  logout: async function (req, res) {
    req.session.destroy();
    req.logout();
    res.json({
      message: 'Logged Out',
      isAuthenticated: false,
    })
  }

};