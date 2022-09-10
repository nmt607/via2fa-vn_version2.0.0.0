const jwt = require("jsonwebtoken")
const { User } = require('../../models')
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

const authenticateBe = async (req, res, next) => {
    const { token } = req.cookies

    try {

        const decode = jwt.verify(token, 'manhtien345')

        if (decode) {
            const userFound = await User.findOne({
                where: {
                    id: decode.id
                }
            })
            if (userFound) {
                req.userFound = userFound
                return next()
            }

            res.redirect('/admin/login')
        } else {
            res.redirect('/admin/login')
        }


    } catch (error) {

        res.redirect('/admin/login')
    }
}

const authenticateLoginBe = async (req, res, next) => {
    const { token } = req.cookies
    try {
        if (token) {
            const decode = jwt.verify(token, 'manhtien345')
            if (decode) {
                const userFound = await User.findOne({
                    where: {
                        id: decode.id
                    }
                })
                if (userFound) {
                    return res.redirect('/admin')
                }
                next()
            }
        } else {
            next()
        }

    } catch (error) {
       next()
    }
}
module.exports = {
    authenticateFe, authenticateBe, authenticateLoginBe
}