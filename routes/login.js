var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    
    res.render('login');
});

module.exports = router;
