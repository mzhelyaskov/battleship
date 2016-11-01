var User = require('../models/user');

module.exports = function(req, res, next) {
    User.findById(req.session.userId, function(err, user) {
        if (err) return next(err);
        req.user = res.locals.user = user;
        next();
    });
};