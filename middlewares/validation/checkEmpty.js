const { fomatString } = require("../../utils/fomatString")

const checkEmpty = (fieldName, asName) => (req, res, next) => {
    try {
        const value = req.body[fieldName]
        const valueFomat = fomatString(value)      
        if (valueFomat) {
            next()
        } else {
            res.status(400).send({ message: `Vui lòng nhập ${asName}` })
        }
    } catch (error) {
        res.status(400).send({ message: `Vui lòng nhập ${asName}` })
    }

}

module.exports = {
    checkEmpty
}