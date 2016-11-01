var express = require('express');
var checkAuth = require('../middleware/checkAuth');
var router = express.Router();

/* GET home page. */
router.get('/', checkAuth, function (req, res) {
    res.render('index');
});

module.exports = router;