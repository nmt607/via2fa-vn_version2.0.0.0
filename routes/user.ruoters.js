const express = require('express');
const { User } = require("../models")
const { register, login } = require('../controllers/user.controllers');
const { checkLen } = require('../middlewares/validation/checkLen');
const { checkExistReject } = require('../middlewares/validation/checkExistReject');
const { checkEmpty } = require('../middlewares/validation/checkEmpty');
const { checkIsEmail } = require('../middlewares/validation/checkIsEmail');
const { checkIsPhone } = require('../middlewares/validation/checkIsPhone');
const userRouter = express.Router();



// API Router
userRouter.post("/register",
  checkEmpty("username", "Tài khoản"),
  checkLen('username', 'Tài khoản', [4, 18]),
  checkExistReject(User, "username", "Tài khoản"),
  checkEmpty("password", "Mật khẩu"),
  checkLen('password', 'Mật khẩu', [4, 18]),
  checkEmpty("email", "Email"),
  checkIsEmail(),
  checkEmpty("phone", "Số điện thoại"),
  checkIsPhone(),
  register
)

userRouter.post("/login", login)

// Get Page
userRouter.get("/register", (req, res, next) => {
  res.render('auth/register', { title: 'Đăng Kí' });
})

module.exports = {
  userRouter
};
