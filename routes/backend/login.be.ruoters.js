const express = require('express');

// controllers
const { loginPage, login } = require('../../controllers/backend/login.be.controllers');
const {  authenticateLoginBe } = require('../../middlewares/auth/authenticate');

// middlewares
const { checkEmpty } = require('../../middlewares/validation/checkEmpty');

const loginBeRouter = express.Router();

// Get Page
loginBeRouter.get("/login", authenticateLoginBe, loginPage)



// API
loginBeRouter.post("/api/login",
    checkEmpty("username", "Tài khoản"),
    checkEmpty("password", "Mật khẩu"),
    login
)

module.exports = {
    loginBeRouter
};
