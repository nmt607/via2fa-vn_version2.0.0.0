// login
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$('#loginForm').on('submit', function (e) {
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
        // nhúng token vào cookie của browser
        // keyname: token,value,hạn: 1 ngày
        setCookie('token', res.data.token, 1)
        $('.error-message').hide()
        $('.success-message').show()
        setTimeout(() => {
            window.location.href = "/"
        }, 1000);
    }).catch((error) => {
        $('.error-message').show()
        $('.success-message').hide()
    })
})