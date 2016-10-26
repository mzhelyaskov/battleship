var db = require('../lib/mysql');

// function User(data) {
//     this.id = data.id;
//     this.username = data.username;
//     this.email = data.email;
//     this.firstname = data.firstname;
//     this.secondname = data.secondname;
//
//     //TODO доработать этот момент. Есть подозрение что пароль не долже храниться в объекте
//     this.hashed_password = data.hashed_password;
//     this.salt = data.salt;
// }

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
                    callback(null, users[0]);
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
                    callback(null, users);
                }
            });
            connection.on('error', function(err) {
                callback(err);
            });
        });
    }
};