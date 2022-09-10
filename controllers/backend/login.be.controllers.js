//login

const { User } = require("../../models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { fomatString } = require("../../utils/fomatString");

const login = async (req, res) => {
    const { username, password } = req.body
    const usernameFomatString = fomatString(username)
    const roleArray = process.env.ROLEADMIN.split(',')
    try {
        const userFound = await User.findOne({
            where: {
                username: usernameFomatString,
                role: roleArray
            }
        })
        if (userFound) {
            const isAuth = bcrypt.compareSync(password, userFound.password)
            if (isAuth) {
                const token = jwt.sign({ id: userFound.id }, "manhtien345", {
                    expiresIn: 1 * 60
                })
                res.status(200).send({ message: "Đăng nhập thành công", token })
            } else {
                res.status(403).send({ message: "Tài khoản hoặc mật khẩu không đúng" })
            }
        } else {
            res.status(403).send({ message: "Tài khoản hoặc mật khẩu không đúng" })
        }
    } catch (error) {
        res.status(500).send({ message: "Lỗi ngoại lệ", error })
    }
}


const loginPage = (req, res) => {
    res.render('backend/login.be.ejs',
        {
            layout: false,
            title: 'Đăng Nhập - Adminitrator',
            layout: 'mainLayouts/nothing.ejs',
            script: `<script src="/vendor/axios/dist/axios.min.js"></script>
<script src='/public/js/backend/pages/login.be.js'></script>`,
        }
    );
}

module.exports = {
    loginPage, login
}


