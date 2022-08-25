const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    const { token } = req.cookies
    try {
        const decode = jwt.verify(token, 'manhtien345')
        if (decode) {
            req.id = decode.id
            next()
        } else {
            res.redirect('/login')
        }
    } catch (error) {
        res.redirect('/login')
    }
}

module.exports = {
    authenticate
}