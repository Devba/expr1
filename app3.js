var createError = require('http-errors');
var express = require('express');
var path = require('path');
var adaro = require('adaro');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');//var usersRouter = require('./routes/users');
var signuprouter = require('./routes/signup');

var app = express();
var session = require('express-session');
app.use(express.static(path.join('/views/hive/keychain')));

app.use( session( {
    /* Aquí irían los atributos de nuestra sesión, como claves,     * cómo se guarda, tiempo de expiración, etc...
     */
    secret: 'your-ayayayaa-key',    resave: false,    saveUninitialized: true,
}));

// view engine setup

app.set('view engine', 'ejs');//app.set('view engine', 'pug');
app.use(logger('dev'));app.use(logger('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
console.log(path.join(__dirname, 'views'));


app.use("/checklic",require("./mods/dbs/chlicRoutes"));
app.use('/', indexRouter);

//test routers

app.use('/su', signuprouter);//app.use('/users', usersRouter);
app.use("/hive",require("./routes/hiverouter"));
app.use("/tests",require("./routes/tests"));

// catch 404 and forward to error handler

app.use(function(req, res, next) {    next(createError(404));});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //res.status(404).sendFile(path.join(__dirname + '/public/404.html'))

    // render the error page   // res.status(err.status || 500);  //  res.render('error',{error :err,message:"algo"});
    res.render('error',{error:err});
});

module.exports = app;
