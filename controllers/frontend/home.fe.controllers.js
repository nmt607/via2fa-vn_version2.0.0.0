// home
const homePage = (req, res) => {
    // loigic code

    res.render('frontend/home.fe.ejs',
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
            },
            script: `<script src='/public/js/frontend/pages/home.fe.js'></script>`
        }
    )
}

module.exports = {
    homePage
}
