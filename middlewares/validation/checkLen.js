const checkLen = (fieldName, asName, array) => (req, res, next) => {
    const value = req.body[fieldName]  
    const max = array[1] || 1000
    if (value.length >= array[0] && value.length <= max) {
        next()
    } else {
        res.status(400).send({ message: `${asName} phải có ít nhất từ ${array[0]} đến ${max}` })
    }
}


module.exports = {
    checkLen
}