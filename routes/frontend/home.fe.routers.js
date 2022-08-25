const express = require('express')
// middlwares
const { authenticate } = require('../../middlewares/auth/authenticate');
// controllers
const { homePage } = require('../../controllers/frontend/home.fe.controllers');
const homeRuoter = express.Router()

// home page
homeRuoter.get("/", authenticate, homePage)

module.exports = {
    homeRuoter
}