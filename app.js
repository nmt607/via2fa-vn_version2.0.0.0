const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan');
const exphbs = require("express-handlebars")
const { rootRouter } = require("./routes");

const app = express();

// setup exhbs template engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'resources/views/mainLayouts'),
  partialsDir: path.join(__dirname, 'resources/views/mainPartials'),

  // create custom helpers func
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views/'))

// HTTP logger
app.use(logger('dev')); // sửa dev -> combined

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))

// set static path
app.use("/public", express.static(path.join(__dirname, './public')));
app.use("/vendor", express.static(path.join(__dirname, './node_modules')));

// user Ruoter
app.use('/', rootRouter);


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('errors/error');
});

module.exports = app;
