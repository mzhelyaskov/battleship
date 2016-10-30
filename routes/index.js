var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
    User.findById(req.session.user_id, function(err, user) {
        if (err) return next(err);
        res.render('index', {fullName: user ? user.getFullName() : ""});
    });
});

module.exports = router;
