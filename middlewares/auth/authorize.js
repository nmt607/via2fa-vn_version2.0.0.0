
const authorizeLoginBe = async (req, res, next) => {
    const roleArray = process.env.ROLEADMIN.split(',')
    const { userFound } = req
    try {
       
        if (userFound) {
            if (roleArray.findIndex(role => role === userFound.role) > -1) {
                next()
            } else {
                res.redirect('/admin/login')
            }
        } else {
            res.redirect('/admin/login')
        }

    } catch (error) {
        res.status(500).render('errors/500.ejs', {
            title: 'Có lỗi sảy ra',
            error: error.message,
            script: false
        })
    }
}

module.exports = {
    authorizeLoginBe
}