const { fomatString } = require("../../utils/fomatString")

const checkEmpty = (fieldName, asName) => (req, res, next) => {
    const value = req.body[fieldName]
    const valueFomat = fomatString(value)
    console.log(valueFomat)
    if (valueFomat) {
        next()
    } else {
        res.status(400).send({ message: `Vui lòng nhập ${asName}` })
    }
}

module.exports = {
    checkEmpty
}