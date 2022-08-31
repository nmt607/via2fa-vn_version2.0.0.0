
const express = require('express');

// controllers
const { getUserManagermentPage, getUserById, editUser, softDeleteUser } = require('../../controllers/backend/userManagement.be.controllers');

// middlewares
const { authenticateBe } = require("../../middlewares/auth/authenticate");
const { authorizeLoginBe } = require('../../middlewares/auth/authorize');
const { checkLen } = require('../../middlewares/validation/checkLen');
const { checkEmpty } = require('../../middlewares/validation/checkEmpty');
const { checkIsEmail } = require('../../middlewares/validation/checkIsEmail');
const { checkIsPhone } = require('../../middlewares/validation/checkIsPhone');
const { checkAmountRange } = require('../../middlewares/validation/checkAmountRange');
const { checkPasswordEdit } = require('../../middlewares/validation/checkPasswordEdit.be');
const { pagePaginationValidate } = require('../../middlewares/pagination/pagePagination');

const userManagementRuoter = express.Router();

// Get Page
userManagementRuoter.get("/user-management", authenticateBe, authorizeLoginBe, pagePaginationValidate, getUserManagermentPage)


// API
userManagementRuoter.post("/api/get-user-by-id", authenticateBe, authorizeLoginBe, getUserById)
userManagementRuoter.put("/api/edit-user", authenticateBe, authorizeLoginBe,
    checkEmpty("username", "Tài khoản"),
    checkLen('username', 'Tài khoản', [4, 18]),
    checkPasswordEdit(4, 18),
    checkEmpty("email", "Email"),
    checkIsEmail(),
    checkEmpty("phone", "Số điện thoại"),
    checkIsPhone(),
    checkAmountRange,
    editUser
)
userManagementRuoter.delete("/api/soft-delete-user", authenticateBe, authorizeLoginBe, softDeleteUser)

module.exports = {
    userManagementRuoter
};
