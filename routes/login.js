var express = require('express');
var router = express.Router();
var User = require('../models').User;

router.get('/', function(req, res, next) {
    res.render('login', {error: null});
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.authorize(username, password, function(err, user) {
        if (err) {
            res.render('login', {error: err});
            return;
        }
        req.session.userId = user.id;
        res.redirect('/');
    });
});

module.exports = router;
