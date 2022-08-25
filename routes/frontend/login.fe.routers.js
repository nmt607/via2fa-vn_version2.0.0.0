const express = require('express');

// controllers
const { loginPage, login } = require('../../controllers/frontend/login.fe.controllers');

// middlewares
const { checkEmpty } = require('../../middlewares/validation/checkEmpty');

const loginRouter = express.Router();

// Get Page
loginRouter.get("/", loginPage)


// API
loginRouter.post("/",
    checkEmpty("username", "Tài khoản"),
    checkEmpty("password", "Mật khẩu"),
    login
)

module.exports = {
    loginRouter
};
