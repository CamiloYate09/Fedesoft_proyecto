var express = require('express');
var router = express.Router();

var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);

// rutas de usuario
router.get('/auth/signup', controllers.UserController.getSignUp);


// ruta para el formulario
router.post('/auth/signup', controllers.UserController.postSignUp);


module.exports = router;
