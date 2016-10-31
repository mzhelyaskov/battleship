var User = require('../models/user');

module.exports = function(req, res, next) {
    if (!req.session.authorized) return next();
    User.findById(req.session.userId, function(err, user) {
        if (err) return next(err);
        req.user = user;
        next();
    });
};