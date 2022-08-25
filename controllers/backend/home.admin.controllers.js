const adminHomePage = (req, res, next) => {
    const title = "Home - Admin"
    res.render('backend/pages/homeAdmin',
        {
            title,
            script:
                `
            <script src='/public/js/frontend/pages/homeAdmin.js'></script
            `,
            layout:"adminLayout"
        }
    )
}