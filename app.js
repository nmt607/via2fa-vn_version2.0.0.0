const express = require('express');
const path = require('path');
const helmet = require("helmet")
const cors = require('cors')
var expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override')
const logger = require('morgan');
const { rootRouter } = require("./routes");


const app = express();

// mã hoá header bởi helmet sử dụng trong môi trường product
// app.use(helmet())

// mở rule cho các client khác orgin có thể truy xuất tài nguyên từ server
// app.use(cors({
//   origin:'base url',
//   methods:['POST','GET']
// }))

// setup template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views/'))
app.use(expressLayouts);
app.set('layout', 'mainLayouts/defaultLayout');

// HTTP logger
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'))

// set static path
app.use("/public", express.static(path.join(__dirname, './public')));
app.use("/utils", express.static(path.join(__dirname, './public/js/utils')));
app.use("/vendor", express.static(path.join(__dirname, './node_modules')));


// bảo trì server
// app.get('*', function (req, res) {
//   throw { status: 503, message: 'detailed message' };
// })

// user Ruoter
app.use('/', rootRouter);



// error handler
app.use(function (req, res) {
  res.status(404);
  res.render('errors/404.ejs', {
    title: '404: File Not Found',
    layout: false,
  })
})

// Handle 500 - 503
app.use(function (error, req, res, next) {
  if (error.status == 503) {
    res.status(503).render('errors/503.ejs', {
      title: '503: Service Unavailable',
      error: error.message,     
      layout: false,
    });
  } else {
    res.status(500).render('errors/500.ejs', {
      title: '500: Internal Server Error',
      error: error.message,
      layout: false,
    });
  }
})




module.exports = app;
