var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./server/routes/index');
var personasRouter = require('./server/routes/personas');
var campusRouter = require('./server/routes/campus');
var estadosRouter = require('./server/routes/estados');
var paisesRouter = require('./server/routes/paises');
var institucionesRouter = require('./server/routes/instituciones');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')))
app.use('/popper', express.static(path.join(__dirname, '/node_modules/popper.js/dist/')))
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')))

app.use('/', indexRouter);
app.use('/personas', personasRouter);
app.use('/campus', campusRouter);
app.use('/estados', estadosRouter);
app.use('/paises', paisesRouter);
app.use('/instituciones', institucionesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
