const { fomatString } = require("../../utils/fomatString");

const checkIsEmail = () => (req, res, next) => {
    const { email } = req.body
    const removeEspaceEmail = fomatString(email);
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if (regex.test(removeEspaceEmail)) {
        next()
    } else {
        res.status(400).send({ message: `Email không hợp lệ` })
    }
}

module.exports = {
    checkIsEmail
}