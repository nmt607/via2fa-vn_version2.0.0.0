const { User } = require('../../models')
const { Op } = require('sequelize')
const bcrypt = require("bcryptjs");
const gravatarUrl = require("gravatar-url");
const dateFormat = require('date-format')
// Page
const getUserManagermentPage = async (req, res) => {
    const { page, pagesize } = req
    const limit = pagesize
    const offset = pagesize * (page - 1)
    const totalUser = await User.count({
        where: {
            deletedAt: null,
            role: 'client'
        },
    })
    const totalPage = Math.ceil(totalUser / pagesize)
    try {
        if (limit) {
            let userList = await User.findAll({
                attributes: {
                    include: ['id', 'username', 'email', 'phone', 'amount', 'createdAt']
                },
                where: {
                    deletedAt: null,
                    role: 'client'
                },
                order: [["createdAt", "DESC"]],
                limit,
                offset,
            })
            res.render('backend/user-management.be.ejs',
                {
                    layout: 'mainLayouts/adminLayout.ejs',
                    userList,
                    totalPage,
                    page,
                    title: 'Quản lý người dùng',
                    dateFormat,
                    script: `<script  src="/vendor/axios/dist/axios.min.js"></script>
<script type="module" src='/public/js/backend/pages/userManagement.be.js'></script>`,
                }
            );
        } else {
            let userList = await User.findAll({
                attributes: {
                    include: ['id', 'username', 'email', 'phone', 'amount', 'createdAt']
                },
                where: {
                    deletedAt: null,
                    role: 'client'
                },
                order: [["createdAt", "DESC"]],
                limit: 5,
                offset: 0,
            })
            res.render('backend/user-management.be.ejs',
                {
                    layout: 'mainLayouts/adminLayout.ejs',
                    userList,
                    totalPage,
                    title: 'Quản lý người dùng',
                    dateFormat,
                    script: `<script  src="/vendor/axios/dist/axios.min.js"></script>
<script type="module" src='/public/js/backend/pages/userManagement.be.js'></script>`,
                }
            );
        }

    } catch (error) {
        res.status(500).send({ message: "Lỗi ngoại lệ", error })
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
        res.status(500).send({ message: "Lỗi ngoại lệ", error })
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
        res.status(500).send({ message: "Lỗi ngoại lệ", error })

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
            res.status(400).send({ message: 'Xoá thất bại' })
        }
    } catch (error) {
        res.status(500).send({ message: "Lỗi ngoại lệ", error })
    }
}
module.exports = {
    getUserManagermentPage, getUserById, editUser, softDeleteUser
}