const express = require('express');

// controllers
const { loginPage, login } = require('../../controllers/backend/login.be.controllers');

// middlewares
const { checkEmpty } = require('../../middlewares/validation/checkEmpty');

const loginBeRouter = express.Router();

// Get Page
loginBeRouter.get("/login", loginPage)



// API
loginBeRouter.post("/api/login",
    checkEmpty("username", "Tài khoản"),
    checkEmpty("password", "Mật khẩu"),
    login
)

module.exports = {
    loginBeRouter
};
