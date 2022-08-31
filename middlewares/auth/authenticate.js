const jwt = require("jsonwebtoken")

const authenticateFe = (req, res, next) => {
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

const authenticateBe = (req, res, next) => {
    const { token } = req.cookies
    try {

        const decode = jwt.verify(token, 'manhtien345')
        if (decode) {
            req.id = decode.id
            next()
        } else {
            res.redirect('/admin/login')
        }


    } catch (error) {

        res.redirect('/admin/login')
    }
}
module.exports = {
    authenticateFe, authenticateBe
}