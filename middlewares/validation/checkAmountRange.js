
const checkAmountRange = (req, res, next) => {
    let { currentAmuont, addAmount } = req.body
    currentAmuont = Number(currentAmuont)
    addAmount = Number(addAmount)

    const totalAmount = currentAmuont + addAmount
    req.totalAmount = totalAmount
    if (currentAmuont < 0) {
        res.status(400).send({ message: 'Số tiền hiện tại không được nhỏ hơn 0' })
    }
    else {
        if (currentAmuont > 9999999999) {
            res.status(400).send({ message: 'Số tiền hiện tại vượt quá giới hạn' })
        } else {
            if (totalAmount < 0 || totalAmount > 9999999999) {
                res.status(400).send({ message: 'Số tiền cộng thêm vượt quá giới hạn' })
            } else {
                next()
            }
        }
    }
}

module.exports = {
    checkAmountRange
}
