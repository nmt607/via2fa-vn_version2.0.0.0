const homePage = (req, res, next) => {   
    res.render('backend/home.be.ejs',
        {
            layout: 'mainLayouts/adminLayout.ejs',
            title:'Trang chủ - Admin',
            script:
                `
            <script src='/public/js/backend/pages/home.be.js'></script
            `,
        }
    )
}

module.exports = {
    homePage
}