const express = require('express');
const { userRouter } = require("./user.ruoters")
const rootRouter = express.Router();


// API Router
rootRouter.use("/user", userRouter);

/* GET home page. */
rootRouter.get('/', function (req, res, next) {
  res.render('pages/home', { title: 'via2fa.vn' });
});

module.exports = {
  rootRouter
};
