var postgresql = require('pg');
var bcript = require('bcryptjs'); // modulo para la encriptacion de contraseñas

module.exports = {

    getSignUp: function (req, res, next) {

        return res.render('users/signup');

    },

// metodos
    postSignUp: function (req, res, next) {
        // console.log(req.body);
        // return;

        var salt = bcript.genSaltSync(10);
        var password = bcript.hashSync(req.body.password, salt);

        var user = {
            email: body.email,
            nombre: body.nombre,
            apellido: body.apellido,
            password: password,
            cuidad: body.cuidad,
            pais: body.pais,
            intereses: body.interes

        };

        var config = require('.././database/config');

        var db = postgresql.createConnection(config);

        db.connect();

        db.query('INSERT INTO usuarios SET ?', user, function (err, rows, fileds) {
            if (err) throw  err;

            db.end();

        });

        return;

    }


};