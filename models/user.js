var db = require('../lib/mysql');
var userUtils = require('../lib/userUtils');
var async = require('async');
var AuthError = require('../errors/authError');

function User(data) {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.firstname = data.firstname;
    this.secondname = data.secondname;
    if (data.password) {
        this.setPassword(data.password);
    } else {
        this.salt = data.salt;
        this.hashed_password = data.hashed_password;
    }
}

User.prototype.getFullName = function() {
    if (this.firstname && this.secondname) {
        return this.firstname + this.secondname;
    }
    return this.username; 
};

User.prototype.setPassword = function(password) {
    this._paswword = password;
    this.salt = userUtils.makeSalt();
    this.hashed_password = userUtils.encryptPassword(password, this.salt);
};

User.prototype.checkPassword = function (password) {
    return userUtils.encryptPassword(password, this.salt) === this.hashed_password;
};

User.prototype.save = function(callback) {
    var user = this;
    db.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            callback(err);
            return;
        }
        var sql = 'INSERT INTO user SET ?';
        var postUser = userUtils.createPostUser(user);
        connection.query(sql, postUser, function(err){
            connection.release();
            callback(err);
        });
    });
};

User.find = function(callback) {
    db.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            callback(err);
            return;
        }
        var sql = 'SELECT * FROM user';
        connection.query(sql, function(err, users){
            connection.release();
            if(!err) {
                callback(null, users.map(function(userData) {new User(userData)}));
            }
        });
        connection.on('error', function(err) {
            callback(err);
        });
    });
};

User.findById = function(userId, callback) {
    if (isNaN(userId)) {
        callback(null, null);
        return;
    }
    db.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            callback(err);
            return;
        }
        var sql = 'SELECT * FROM user WHERE id = ' + connection.escape(parseInt(userId));
        connection.query(sql, function(err, users){
            connection.release();
            if(!err) {
                var user = users[0] && new User(users[0]);
                callback(null, user);
            }
        });
        connection.on('error', function(err) {
            callback(err);
        });
    });
};

User.findByName = function(username, callback) {
    db.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            callback(err);
            return;
        }
        var sql = 'SELECT * FROM user WHERE username = ' + connection.escape(username);
        connection.query(sql, function(err, users){
            connection.release();
            if(!err) {
                var user = users[0] && new User(users[0]);
                callback(null, user);
            }
        });
        connection.on('error', function(err) {
            callback(err);
        });
    });
};

User.authorize = function(username, password, callback) {
    var User = this;
    async.waterfall([
        function(callback) {
            User.findByName(username, callback);
        },
        function(user, callback) {
            if (user) {
                if (user.checkPassword(password)) {
                    callback(null, user);
                } else {
                    callback(new AuthError("Incorrect Username or Password!"));
                }
            } else {
                var user = new User({username: username, password: password});
                user.save(function(err) {
                    if (err) return callback(err);
                    callback(null, user);
                });
            }
        }
    ], callback);
};

module.exports = User;