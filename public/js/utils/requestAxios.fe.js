

// common func
const axiosJsonProcess = (method, url, data) => {
    const subData = data || null
    return axios({
        method,
        url,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(subData)
    })
}



export {
    axiosJsonProcess
}