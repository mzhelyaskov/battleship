var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.findByName(username, function(err, user) {
        if (err) return next(err);
        if (user) {
            if (user.checkPassword(password)) {
                // ... 200 ОК
            } else {
                // ... 403 Forbiden
            }
        } else {
            var user = new User({username: username, password: password});
            user.save(function(err) {
                if (err) return next(err);
                // ... 200
            });
        }
    });
    res.render('login');
});

module.exports = router;
