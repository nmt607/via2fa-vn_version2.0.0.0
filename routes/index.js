const express = require('express');
// FE
const { homeFeRuoter } = require("./frontend/home.fe.routers")
const { registerFeRuoter } = require("./frontend/register.fe.routers")
const { loginFeRouter } = require("./frontend/login.fe.routers");

//BE
const { homeBeRuoter } = require('./backend/home.be.ruoters');
const { loginBeRouter } = require('./backend/login.be.ruoters');
const { userManagementRuoter } = require('./backend/userManagement.be.ruoters')
const rootRouter = express.Router();


// frontend ruotes
rootRouter.use('/', homeFeRuoter)
rootRouter.use('/', registerFeRuoter)
rootRouter.use('/', loginFeRouter)


// backend ruotes
rootRouter.use('/admin', homeBeRuoter)
rootRouter.use('/admin', loginBeRouter)
rootRouter.use('/admin', userManagementRuoter)
module.exports = {
  rootRouter
};
