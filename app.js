const express = require('express');
const path = require('path');
var expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan');
const { rootRouter } = require("./routes");

const app = express();

// setup template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views/'))
app.use(expressLayouts);
app.set('layout', 'mainLayouts/defaultLayout');
// HTTP logger
app.use(logger('dev')); // sửa dev -> combined

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))

// set static path
app.use("/public", express.static(path.join(__dirname, './public')));
app.use("/utils", express.static(path.join(__dirname, './public/js/utils')));
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
