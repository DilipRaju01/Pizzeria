var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("mongoose");
var cors=require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var buildRouter = require('./routes/build-pizza');
var orderRouter = require('./routes/order-pizza');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//mongoose connection
async function main() {
  await mongoose.connect('mongodb+srv://edgdileep8621:qXLcU41VP1ayi2CM@cluster0.mczof.mongodb.net/mongoDatabase?retryWrites=true&w=majority&appName=Cluster0')
  // await mongoose.connect('mongodb://127.0.0.1:27017/mongoDatabase');
  console.log("Database is connected successfully");
}
main().catch((error)=>console.log(error));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pizza', buildRouter);
app.use('/pizza', orderRouter);

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
