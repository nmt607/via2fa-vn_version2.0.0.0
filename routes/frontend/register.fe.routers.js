const express = require('express');

// model
const { User } = require("../../models")

// controllers
const { registerPage, register } = require('../../controllers/frontend/register.fe.controllers');

// middlewares
const { checkLen } = require('../../middlewares/validation/checkLen');
const { checkExistReject } = require('../../middlewares/validation/checkExistReject');
const { checkEmpty } = require('../../middlewares/validation/checkEmpty');
const { checkIsEmail } = require('../../middlewares/validation/checkIsEmail');
const { checkIsPhone } = require('../../middlewares/validation/checkIsPhone');
const { checkRePassword } = require('../../middlewares/validation/checkRePassword');

const registerFeRuoter = express.Router();

// Get Page
registerFeRuoter.get("/register", registerPage)

// API
registerFeRuoter.post("/api/register",
    checkEmpty("username", "Tài khoản"),
    checkLen('username', 'Tài khoản', [4, 18]),
    checkExistReject(User, "username", "Tài khoản"),
    checkEmpty("password", "Mật khẩu"),
    checkLen('password', 'Mật khẩu', [4, 18]),
    checkRePassword,
    checkEmpty("email", "Email"),
    checkIsEmail(),
    checkEmpty("phone", "Số điện thoại"),
    checkIsPhone(),
    register
)


module.exports = {
    registerFeRuoter
};
