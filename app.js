const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var exphbs = require('express-handlebars');


const { rootRouter } = require("./routes");


const app = express();

// init handlebars - template engine
app.engine('hbs', exphbs({ extname: ".hbs" }));
app.set('view engine', 'hbs');
// view engine setup
app.set('views', path.join(__dirname, '/resources/views'));

// HTTP logger
app.use(logger('combined')); // sửa dev -> combined

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, './public')));

app.use('/', rootRouter);

app.use(function (req, res) {
    res.status(404).render('errors/404.hbs');
});
app.use(function (req, res) {
    res.status(503).render('errors/503.hbs');
});

module.exports = app;
