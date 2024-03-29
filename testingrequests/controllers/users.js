

module.exports = (app, agent) => {
    const axios = require('axios');
    const baseUrl = `users`

    app.post(`/${baseUrl}`, async function (req, res) {
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}`,  req.body, { httpsAgent: agent });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.post(`/${baseUrl}/administrator`, async function (req, res) {
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}/administrator`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.post(`/${baseUrl}/:userName`, async function (req, res) {
        const {userName} = req.params;
        const backendResponse = await axios.delete(`${process.env.BACKEND_HOST}/${baseUrl}/${userName}`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.post(`/${baseUrl}/change/password`, async function (req, res) {
        console.log("VENGO ACA 1")
        const backendResponse = await axios.patch(`${process.env.BACKEND_HOST}/${baseUrl}/password`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        console.log("VENGO ACA 2")
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.get(`/${baseUrl}`, async function (req, res) {
        const {offset, limit, orderBy, filter} = req.query;
        const backendResponse = await axios.get(`${process.env.BACKEND_HOST}/${baseUrl}?limit=${limit || ''}&offset=${offset || ''}&orderBy=${orderBy || ''}&filter=${filter || ''}`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.get(`/sessions`, async function (req, res) {
        const backendResponse = await axios.get(`${process.env.BACKEND_HOST}/sessions`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.post(`/login`, async function (req, res) {
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/login`,  req.body, { httpsAgent: agent });
        console.log(backendResponse, 'backendResponse')
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.post(`/logout`, async function (req, res) {
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/logout`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.post(`/${baseUrl}/add/watchlist`, async function (req, res) {
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}/watchlist`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })

}
