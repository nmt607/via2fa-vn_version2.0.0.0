const express = require('express');

// controllers
const { loginPage, login } = require('../../controllers/frontend/login.fe.controllers');

// middlewares
const { checkEmpty } = require('../../middlewares/validation/checkEmpty');

const loginFeRouter = express.Router();

// Get Page
loginFeRouter.get("/login", loginPage)


// API
loginFeRouter.post("/api/login",
    checkEmpty("username", "Tài khoản"),
    checkEmpty("password", "Mật khẩu"),
    login
)

module.exports = {
    loginFeRouter
};
