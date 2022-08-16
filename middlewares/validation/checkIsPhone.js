const { fomatString } = require("../../utils/fomatString");

const checkIsPhone = () => (req, res, next) => {
    const { phone } = req.body
    const removeEspacePhone = fomatString(phone);
    const regex = new RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i)
    if (regex.test(removeEspacePhone) && removeEspacePhone.length >= 10 && removeEspacePhone.length <= 12) {
        next()
    } else {
        res.status(400).send({ message: `Số điện thoại không hợp lệ` })
    }
}

module.exports = {
    checkIsPhone
}