var db = require('../lib/mysql');
const crypto = require('crypto');

function User(data) {

    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.firstname = data.firstname;
    this.secondname = data.secondname;
    this.hashedPassword = data.hashedPassword;

    var _salt = data.salt;
    var _plainPassword;

    this.checkPassword = function (password) {
        return encryptPassword(password) === this.hashedPassword;
    };

    this.getPassword = function() {
        return _plainPassword;
    };

    this.setPassword = function(password) {
        _plainPassword = password;
        _salt = Math.random() + '';
        this.hashedPassword = encryptPassword(password);
    };

    function encryptPassword(password) {
        return crypto.createHmac('sha256', _salt)
            .update('There can be only one!')
            .digest('hex');
    }

    this.save = function() {
        // TODO ... реализовать функцию сохранения в базу
    };
}

module.exports = {
    findById: function(userId, callback) {
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
    },

    find: function(callback) {
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
    },

    findByName: function(username, callback) {
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
    }
};