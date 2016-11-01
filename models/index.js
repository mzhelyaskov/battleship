var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var Sequelize = require('sequelize');
var config = require('../config').get('mysql');
var db = {};

var sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    config.options
);

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename);
    })
    .forEach(function(file) {
        if (file.slice(-3) !== '.js') return;
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// init db
sequelize.sync({force: true});

module.exports = db;