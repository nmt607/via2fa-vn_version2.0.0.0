const express = require('express');
const { homeRuoter } = require("./frontend/home.fe.routers")
const { registerRuoter } = require("./frontend/register.fe.routers")
const { loginRouter } = require("./frontend/login.fe.routers")

const rootRouter = express.Router();


// frontend ruotes
rootRouter.use('/', homeRuoter)
rootRouter.use('/register', registerRuoter)
rootRouter.use('/login', loginRouter)




module.exports = {
  rootRouter
};
