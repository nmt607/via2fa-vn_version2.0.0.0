// register
const { User } = require("../../models")
const bcrypt = require("bcryptjs");
const gravatarUrl = require("gravatar-url");
const { fomatString } = require("../../utils/fomatString");

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

const registerPage = (req, res) => {
    const title = "Đăng Kí"
    res.render('frontend/register.fe.ejs',
        {
            layout: false,
            title,
            script:
                `<script src='/vendor/axios/dist/axios.min.js'></script> 
<script src='/public/js/frontend/pages/register.fe.js'></script>`,
        }
    );
}

module.exports = {
    registerPage, register
}
