//login

const { User } = require("../../models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { fomatString } = require("../../utils/fomatString");

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


const loginPage = (req, res) => {
    res.render('frontend/login',
        {
            title: 'Đăng Nhập',
            script: `<script src="/vendor/axios/dist/axios.min.js"></script>
<script src='/public/js/frontend/pages/login.js'></script>`,
            layout: false
        }
    );
}

module.exports = {
    loginPage, login
}


