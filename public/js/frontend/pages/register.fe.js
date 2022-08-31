// register
$("#registerForm").on("submit", function (e) {
    e.preventDefault()
    const method = $(this).attr('method')
    const url = $(this).attr('action')
    const formData = new FormData(this)
    let data = {}
    for (let key of formData.keys()) {
        data[key] = formData.get(key)
    }
    axios({
        method: method,
        url: url,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data)
    }).then((res) => {
        $(".error-message").hide()
        $(".success-message").show()
        window.setTimeout(() => {
            window.location.href = "/login"
        }, 2000);
    }).catch((error) => {
        const { message } = error.response.data
        if (message) {
            $(".success-message").hide()
            $(".error-message").text(message).show()
        }
    })
})