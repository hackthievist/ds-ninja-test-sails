/**
 * DashboardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    viewDashboard: function(req, res) {
        if(!req.session.username) return res.redirect('https://delivery-science-frontend.herokuapp.com/login');
        return res.redirect('https://delivery-science-frontend.herokuapp.com/dashboard');
    },

    submitForm: function(req, res) {
        res.redirect('/hobby');
    }

};

