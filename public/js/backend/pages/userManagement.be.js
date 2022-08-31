import { axiosJsonProcess } from "/utils/requestAxios.fe.js"
// user management
$(document).ready(() => {
    // HANDLE MODAL EDIT USER
    // interface
    document.getElementById('modalUserEdit').addEventListener('hidden.bs.modal', event => {
        $('#modalFormEditUser').trigger("reset")
        $('.message-error-edit-user').hide()
    })

    //get value form data modal
    $('.btn-modal-edit').on('click', async function () {
        const id = $(this).attr('data-id')
        const data = { id, }
        const method = $(this).attr('data-method')
        const url = $(this).attr('data-action')

        try {
            const response = await axiosJsonProcess(method, url, data)
            const { username, email, phone, amount } = response.data.userFound
            $('.model-title-edit-user').text(`Sửa thông tin - ${username}`)

            //  phải là name của form mới có thể select
            // set value form edit user
            // áp dụng cho trường hợp có nhiều form trong 1 trang
            const form = document.forms['editUserForm']
            form['username'].value = username
            form['email'].value = email
            form['phone'].value = phone
            form['currentAmuont'].value = amount
        } catch (error) {
            document.location.href = '/admin/login'
        }
    })
    // handle edit user
    $('#modalFormEditUser').on('submit', async function (e) {
        e.preventDefault()
        const method = $(this).attr('method')
        const url = $(this).attr('action')
        const formData = new FormData(this)
        let data = {}
        for (let key of formData.keys()) {
            data[key] = formData.get(key)
        }

        try {
            await axiosJsonProcess(method, url, data)
            $('.message-error-edit-user').hide()
            $('.message-success-edit-user').text('Chỉnh sửa thông tin thành công').show()
            setTimeout(() => {
                location.reload();
            }, 1000);
        } catch (error) {
            if (error.response.status == 400) {
                $('.message-error-edit-user').text(`${error.response.data.message}`).show()
                $('.message-success-edit-user').hide()
            } else {
                document.location.href = '/admin/login'
            }
        }
    })

    // HANDLE MODAL DELETE USER
    //interface
    document.getElementById('modalUserDelete').addEventListener('hidden.bs.modal', event => {
        $('.message-success-delete-user').hide()
        $('.message-error-delete-user').hide()
    })
    // get username delete 
    $('.btn-modal-delete').on('click', async function () {
        const id = $(this).attr('data-id')
        const data = { id, }
        const method = $(this).attr('data-method')
        const url = $(this).attr('data-action')
        $('.execute-delete').attr('data-id', `${id}`)
        try {
            const response = await axiosJsonProcess(method, url, data)
            const { username } = response.data.userFound
            $('.modal-body-delete-content').text(`Bấm xác nhận để xoá - ${username}`)
            $('.message-success-delete-user').text(`Xoá thành công người dùng  ${username}`)
        } catch (error) {
            document.location.href = '/admin/login'
        }
    })

    // handle delete user
    $('.execute-delete').on('click', async function () {
        $('#modalUserEdit .modal-footer').show()
        $('.modal-body-delete-content').show()
        const id = $(this).attr('data-id')
        const data = { id, }
        const method = $(this).attr('data-method')
        const url = $(this).attr('data-action')
        try {
            await axiosJsonProcess(method, url, data)

            $('.message-success-delete-user').show()
            $('.message-error-delete-user').hide()
            $('#modalUserEdit .modal-footer').hide()
            $('.modal-body-delete-content').hide()
            setTimeout(() => {
                location.reload();
            }, 1000);
        } catch (error) {
            document.location.href = '/admin/login'

        }
    })

})