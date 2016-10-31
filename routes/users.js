var express = require('express');
var router = express.Router();
var HttpError = require('../errors/httpError');
var User = require('../models/user');

router.get('/users', function (req, res, next) {
    User.find(function (err, users) {
        if (err) return next(err);
        res.json({users: users});
    });
});

router.get('/user/:id', function (req, res, next) {
    User.findById(req.params.id, function(err, user) {
        if (err) return next(err);
        if (user) {
            res.json({user: user});
        } else {
            next(new HttpError(404, "User note found."))
        }
    });
});

module.exports = router;
