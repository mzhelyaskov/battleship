const crypto = require('crypto');

module.exports = {
    createPostUser: function (user) {
        var post = {};
        var fieldsForEscape = {'id': true, '_paswword': true};
        for (var key in user) {
            if (!user.hasOwnProperty(key)) continue;
            if (!fieldsForEscape[key]) {
                post[key] = user[key];
            }
        }
        return post;
    },
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },
    encryptPassword: function (password, salt) {
        return crypto.createHmac('sha1', salt).update(password).digest('hex');
    }
};