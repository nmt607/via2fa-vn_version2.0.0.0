const { User, sequelize } = require("../models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatarUrl = require("gravatar-url");
const { fomatString } = require("../utils/fomatString");

const register = async (req, res) => {
    const { username, password, email, phone } = req.body
    try {
        // tạo avatar mặc định
        const avatarUrl = gravatarUrl(email)
        // tạo ra một chuỗi ngẫu nhiên
        const salt = bcrypt.genSaltSync(10)
        // mã hóa salt + password
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await User.create({
            username: fomatString(username),
            password: hashPassword,
            email: fomatString(email),
            phone: fomatString(phone),
            avatar: avatarUrl
        })
        res.status(201).send({ message: "Đăng kí thành công", newUser })

    } catch (error) {
        res.status(500).send({ message: "Đăng kí thất bại", error })
    }
}


const login = async (req, res) => {
    const { username, password } = req.body
    const usernameFomatString = fomatString(username)

    try {
        const userFound = await User.findOne({
            where: {
                username: usernameFomatString,
            }
        })       
        if (userFound) {
            const isAuth = bcrypt.compareSync(password, userFound.password)
            if (isAuth) {
                const token = jwt.sign({ id: userFound.id }, "manhtien345", {
                    expiresIn: 60 * 60
                })
                res.status(200).send({ message: "Đăng nhập thành công", token })
            } else {
                res.status(401).send({ message: "Tài khoản hoặc mật khẩu không đúng" })
            }
        } else {
            res.status(404).send({ message: "Tài khoản hoặc mật khẩu không đúng" })
        }
    } catch (error) {
        res.status(500).send({ message: "Lỗi ngoại lệ", error })
    }
}

module.exports = {
    register, login
}