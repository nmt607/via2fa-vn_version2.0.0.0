const pagePaginationValidate = (req, res, next) => {
    let { page, pagesize } = req.query
    page = parseInt(page)
    pagesize = parseInt(pagesize)


    pagesize = pagesize > 50 ? 50 : pagesize
    pagesize = pagesize < 1 || isNaN(pagesize) ? 5 : pagesize

    page = page < 1 || page == 0 || isNaN(page) ? 1 : page



    req.page = page
    req.pagesize = pagesize

    next()
}

module.exports = {
    pagePaginationValidate
}