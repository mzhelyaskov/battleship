var express = require('express');
var router = express.Router();
var AuthError = require('../errors/authError');
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render('login', {error: null});
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.authorize(username, password, function(err, user) {
        if (err) {
            if (err instanceof AuthError) {
                res.render('login', {error: err});
                return;
            }
            return next(err)
        }
        req.session.userId = user.id;
        req.session.authorized = true;
        res.redirect('/');
    });
});

module.exports = router;
