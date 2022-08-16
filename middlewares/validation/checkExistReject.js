const { fomatString } = require("../../utils/fomatString")

const checkExistReject = (Model, filedName, asName) => async (req, res, next) => {
    const value = req.body[filedName]
    const valueFomat = fomatString(value)
    try {
        const found = await Model.findOne({
            where: {
                [filedName]: valueFomat
            }
        })
        if (found) {
            res.status(409).send({ message: `${asName} đã tồn tại` })
        } else {
            next()
        }
    } catch (error) {
        res.status(500).send({ message: "Lỗi ngoại lệ", error })
    }
}

module.exports = {
    checkExistReject
}