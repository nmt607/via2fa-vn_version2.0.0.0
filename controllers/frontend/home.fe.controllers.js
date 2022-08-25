// home
const homePage = (req, res) => {
    // loigic code

    res.render('frontend/home',
        {
            title: 'via2fa.vn',
            array: [
                "value 0",
                "value 1",
                "value 2",
                "value 3",
            ],
            user: {
                name: "Nguyễn Mạnh Tiến",
                age: "31",
                gender: "Nam"
            }
        }

    )
}

module.exports = {
    homePage
}
