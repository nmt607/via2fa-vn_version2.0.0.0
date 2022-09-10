const { User, Sequelize } = require('../../models')
const { Op } = require('sequelize')
const bcrypt = require("bcryptjs");
const gravatarUrl = require("gravatar-url");
const dateFormat = require('date-format')
// Page
const getUserManagermentPage = async (req, res) => {
    // pagination variable init
    const { page, pagesize } = req
    const limit = pagesize
    const offset = pagesize * (page - 1)

    // filter variable init
    const { date, value, key } = req.query

    const dateFormated = new Date(date)

    try {
        if (date && key && value) {

            const totalUser = await User.count({
                where: {
                    deletedAt: null,
                    role: 'client',
                    [Op.and]: [
                        Sequelize.where(Sequelize.fn('DAY', Sequelize.col('createdAt')), '=', dateFormated.getDate()),
                        Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('createdAt')), '=', dateFormated.getMonth() + 1),
                        Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('createdAt')), '=', dateFormated.getFullYear()),
                    ],
                    [key]: {
                        [Op.like]: `%${value}%`
                    }
                }
            })

            const totalPage = Math.ceil(totalUser / pagesize)

            const userList = await User.findAll({
                attributes: {
                    include: ['id', 'username', 'email', 'phone', 'amount', 'createdAt']
                },
                order: [["id", "DESC"]],
                limit,
                offset,
                where: {
                    deletedAt: null,
                    role: 'client',
                    [Op.and]: [
                        Sequelize.where(Sequelize.fn('DAY', Sequelize.col('createdAt')), '=', dateFormated.getDate()),
                        Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('createdAt')), '=', dateFormated.getMonth() + 1),
                        Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('createdAt')), '=', dateFormated.getFullYear()),
                    ],
                    [key]: {
                        [Op.like]: `%${value}%`
                    }
                }
            })
            res.render('backend/user-management.be.ejs',
                {
                    userList, totalPage, pagesize, page, dateFormat, date, value, key,
                    title: 'Quản lý người dùng',
                    layout: 'mainLayouts/adminLayout.ejs',
                    script: `<script src="/vendor/axios/dist/axios.min.js"></script>                
                    <script type="module" src='/public/js/backend/pages/userManagement.be.js'></script>`,
                }
            );
        }
        else if (date && !(key && value)) {
            const totalUser = await User.count({
                where: {
                    deletedAt: null,
                    role: 'client',
                    [Op.and]: [
                        Sequelize.where(Sequelize.fn('DAY', Sequelize.col('createdAt')), '=', dateFormated.getDate()),
                        Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('createdAt')), '=', dateFormated.getMonth() + 1),
                        Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('createdAt')), '=', dateFormated.getFullYear()),
                    ]
                }
            })

            const totalPage = Math.ceil(totalUser / pagesize)
            const userList = await User.findAll({
                attributes: {
                    include: ['id', 'username', 'email', 'phone', 'amount', 'createdAt']
                },
                order: [["id", "DESC"]],
                limit,
                offset,
                where: {
                    deletedAt: null,
                    role: 'client',
                    [Op.and]: [
                        Sequelize.where(Sequelize.fn('DAY', Sequelize.col('createdAt')), '=', dateFormated.getDate()),
                        Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('createdAt')), '=', dateFormated.getMonth() + 1),
                        Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('createdAt')), '=', dateFormated.getFullYear()),
                    ]
                }
            })
            res.render('backend/user-management.be.ejs',
                {
                    userList, totalPage, pagesize, page, dateFormat, date, value, key,
                    title: 'Quản lý người dùng',
                    layout: 'mainLayouts/adminLayout.ejs',
                    script: `<script src="/vendor/axios/dist/axios.min.js"></script>                
                    <script type="module" src='/public/js/backend/pages/userManagement.be.js'></script>`,
                }
            );
        } else if (!date && (key && value)) {
            const totalUser = await User.count({
                where: {
                    deletedAt: null,
                    role: 'client',
                    [key]: {
                        [Op.like]: `%${value}%`
                    }
                }
            })

            const totalPage = Math.ceil(totalUser / pagesize)
            const userList = await User.findAll({
                attributes: {
                    include: ['id', 'username', 'email', 'phone', 'amount', 'createdAt']
                },
                order: [["id", "DESC"]],
                limit,
                offset,
                where: {
                    deletedAt: null,
                    role: 'client',
                    [key]: {
                        [Op.like]: `%${value}%`
                    }
                }
            })
            res.render('backend/user-management.be.ejs',
                {
                    userList, totalPage, pagesize, page, dateFormat, date, value, key,
                    title: 'Quản lý người dùng',
                    layout: 'mainLayouts/adminLayout.ejs',
                    script: `<script src="/vendor/axios/dist/axios.min.js"></script>                
                    <script type="module" src='/public/js/backend/pages/userManagement.be.js'></script>`,
                }
            );
        } else {
            const totalUser = await User.count({
                where: {
                    deletedAt: null,
                    role: 'client'
                },
            })

            const totalPage = Math.ceil(totalUser / pagesize)
            let userList = await User.findAll({
                attributes: {
                    include: ['id', 'username', 'email', 'phone', 'amount', 'createdAt']
                },
                order: [["id", "DESC"]],
                limit,
                offset,
                where: {
                    deletedAt: null,
                    role: 'client'
                }
            })

            res.render('backend/user-management.be.ejs',
                {
                    userList, totalPage, pagesize, page, dateFormat, date, value, key,
                    title: 'Quản lý người dùng',
                    layout: 'mainLayouts/adminLayout.ejs',
                    script: `<script src="/vendor/axios/dist/axios.min.js"></script>                
                    <script type="module" src='/public/js/backend/pages/userManagement.be.js'></script>`,
                }
            );
        }

    } catch (error) {
        res.status(500).render('errors/500.ejs', {
            title: 'Có lỗi sảy ra',
            error: error.message,
            script: false
        })
    }
}

// API
const getUserById = async (req, res) => {
    const { id } = req.body
    try {
        const userFound = await User.findOne({
            attributes: ['username', 'email', 'phone', 'amount'],
            where: {
                id,
                deletedAt: null
            },
        })

        if (userFound) {
            res.status(200).send({ message: 'Tìm kiếm thành công', userFound })
        } else {
            res.status(404).send({ message: 'Tìm kiếm thất bại' })
        }
    } catch (error) {
        res.status(500).render('errors/500.ejs', {
            title: 'Có lỗi sảy ra',
            error: error.message,
            script: false
        })
    }
}

const editUser = async (req, res) => {
    const { username, email, password, phone } = req.body
    const totalAmount = req.totalAmount
    try {
        const userFound = await User.findOne({
            where: {
                username,
                deletedAt: null
            }
        })
        // xử lý trước khi import vào DB
        // mã hóa salt + password
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)
        // Edit
        userFound.email = email || userFound.email
        userFound.password = hashPassword || userFound.password
        userFound.phone = phone || userFound.phone
        userFound.amount = totalAmount
        const userEdited = await userFound.save()
        res.status(200).send({ message: 'Cập nhật thành công', userEdited })
    } catch (error) {
        res.status(500).render('errors/500.ejs', {
            title: 'Có lỗi sảy ra',
            error: error.message,
            script: false
        })

    }
}

const softDeleteUser = async (req, res) => {
    const { id } = req.body
    try {
        const userFound = await User.findOne({
            where: {
                id,
                deletedAt: null
            }
        })
        if (userFound) {

            const deletedAt = new Date()
            userFound.deletedAt = deletedAt
            await userFound.save()
            res.status(200).send({ message: 'Đã xoá thành công' })
        } else {

            // res.status(400).send({ message: 'Xoá thất bại' })
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
    getUserManagermentPage, getUserById, editUser, softDeleteUser
}