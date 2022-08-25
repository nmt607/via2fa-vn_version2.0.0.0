const passwordRecheck = (req, res, next) => {
    const { password, passwordReCheck } = req.body
    if (password === passwordReCheck) {
        next()
    } else {
        res.status(400).send({ message: `Mật mã nhập lại chưa trùng khớp` })
    }
}

module.exports = {
    passwordRecheck
}