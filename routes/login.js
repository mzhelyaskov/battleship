var express = require('express');
var router = express.Router();
var async = require('async');
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render('login', {formError: null});
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    async.waterfall([
        function(callback) {
            User.findByName(username, callback);
        },
        function(user, callback) {
            if (user) {
                if (user.checkPassword(password)) {
                    callback(null, user);
                } else {
                    res.render('login', {formError: "Incorrect Username or Password!"});
                }
            } else {
                var user = new User({username: username, password: password});
                user.save(function(err) {
                    if (err) return next(err);
                    callback(null, user);
                });
            }
        }
    ], function (err, user) {
        if (err) return next(err);
        req.session.user_id = user.id;
        res.redirect('/');
    });
});

module.exports = router;
