const checkPasswordEdit = (min, max) => (req, res, next) => {
    const { password } = req.body
    if (password) {
        if (password.length >= min && password.length <= max) {
            next()
        }
        else {
            res.status(400).send({ message: `Mật mã phải có ít nhất từ ${min} đến ${max} kí tự` })
        }
    } else {
        next()
    }
}
module.exports = {
    checkPasswordEdit
}