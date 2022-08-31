
const { User } = require('../../models')

const authorizeLoginBe = async (req, res, next) => { 
    const roleArray = process.env.ROLEADMIN.split(',')
    const { id } = req
    try {
        const userFound = await User.findOne({
            where: {
                id,
            }
        })
        if (roleArray.findIndex(role => role === userFound.role) > -1) {
            next()
        } else {
            res.redirect('/admin/login')
        }
    } catch (error) {
        res.status(500).send({ message: "Lỗi ngoại lệ", error })
    }
}

module.exports = {
    authorizeLoginBe
}