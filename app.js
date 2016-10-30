var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var HttpError = require('./error');

// routes
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    name: 'sid',
    secret: 'r2d2',
    resave: false,
    saveUninitialized: true
}));
app.use(require('./middleware/sendHttpError'));
app.use(express.static(path.join(__dirname, 'public')));

// routing
app.use('/', routes);
app.use('/', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
app.use(function (err, req, res, next) {
    if (typeof err === 'number') {
        err = new HttpError(err);
    }
    if (err instanceof HttpError) {
        res.sendHttpError(err);
    } else {
        // logger.error(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: app.get('env') === 'development' ? err : ""
        });
    }
});

module.exports = app;
