var express = require('express');
var router = express.Router();
var AuthError = require('../errors/authError');
var User = require('../models').User;

router.get('/', function(req, res) {
    res.render('login', {
        message: '',
        errors: {}
    });
});

router.post('/', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    req.assert('username', 'Username is required').notEmpty();
    req.assert('password', '%1 to %2 characters required').len(8, 20);
    var errors = req.validationErrors(true);

    if (errors) {
        res.render('login', {
            message: '',
            errors: errors
        });
        return;
    }

    User.authorize(username, password, function(err, user) {
        if (err) {
            if (err instanceof AuthError) {
                res.render('login', {
                    message: err.message,
                    errors: {}
                });
            } else {
                next(err)
            }
            return;
        }
        req.session.userId = user.id;
        req.session.authenticated = true;
        res.redirect('/');
    });
});

module.exports = router;
