var postgresql = require('pg');

module.exports = {

    getSignUp: function (req, res, next) {

        return res.render('users/signup');

    }


};