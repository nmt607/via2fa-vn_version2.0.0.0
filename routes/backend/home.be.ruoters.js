const express = require('express')
// middlwares
const { authenticateBe } = require('../../middlewares/auth/authenticate');
// controllers
const { homePage } = require('../../controllers/backend/home.be.controllers');
const { authorizeLoginBe } = require('../../middlewares/auth/authorize');
const homeBeRuoter = express.Router()

// home page
homeBeRuoter.get("/", authenticateBe, authorizeLoginBe, homePage)

module.exports = {
    homeBeRuoter
}