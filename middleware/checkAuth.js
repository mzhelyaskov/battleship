var HttpError = require('../errors/httpError');

module.exports = function(req, res, next) {
    if (!req.session.userId) {
        return next(new HttpError(401, "Access allowed only for registered users"));
    }
    next();
};
