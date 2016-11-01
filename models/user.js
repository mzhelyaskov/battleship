var userUtils = require('../lib/userUtils');
var async = require('async');
var AuthError = require('../errors/authError');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [2]}
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
                min: 6
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'first_name'
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'last_name'
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hashedPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'hashed_password'
        },
        password: {
            type: DataTypes.VIRTUAL,
            set: function (password) {
                this.setDataValue('password', password);
                this.setDataValue('salt', userUtils.makeSalt());
                this.setDataValue('hashedPassword', userUtils.encryptPassword(password, this.salt));
            },
            validate: {
                isLongEnough: function (password) {
                    if (password.length < 8) {
                        throw new Error("Please choose a longer password")
                    }
                }
            }
        }
    }, {
        freezeTableName: true,
        getterMethods: {
            fullName: function() {
                if (this.firstname && this.secondname) {
                    return this.firstName + ' ' + this.lastName;
                }
                return this.username;
            }
        },
        instanceMethods: {
            checkPassword: function (password) {
                return userUtils.encryptPassword(password, this.salt) === this.hashedPassword;
            }
        },
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            authorize: function(username, password, callback) {
                User.findOne({where: {username: username}}).then(function(user) {
                    if (user) {
                        if (user.checkPassword(password)) {
                            callback(null, user);
                        } else {
                            callback(new AuthError("Incorrect Username or Password!"));
                        }
                    } else {
                        var user = User.build({username: username});
                        user.set('password', password);
                        var errors = user.validate();

                        user.save()
                            .then(function() {
                                callback(null, user);
                            }).catch(function(err) {
                                callback(err);
                            });
                    }
                });
            }
        }
    });

    return User;
};