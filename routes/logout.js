var express = require('express');
var router = express.Router();

// TODO переделать logout на POST
router.get('/', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
