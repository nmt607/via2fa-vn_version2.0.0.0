const express = require('express')
// middlwares
const { authenticateFe } = require('../../middlewares/auth/authenticate');
// controllers
const { homePage } = require('../../controllers/frontend/home.fe.controllers');
const homeFeRuoter = express.Router()

// home page
homeFeRuoter.get("/", authenticateFe, homePage)

module.exports = {
    homeFeRuoter
}