
module.exports = (app, agent) => {
    const axios = require('axios');
    const baseUrl = `ratings`
    app.post(`/${baseUrl}`, async function (req, res) {
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.get(`/${baseUrl}/items`, async function (req, res) {
        const {offset, limit, orderBy} = req.query;
        const backendResponse = await axios.get(`${process.env.BACKEND_HOST}/${baseUrl}/items?limit=${limit || ''}&offset=${offset || ''}&orderBy=${orderBy || ''}`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.get(`/${baseUrl}/celebrities`, async function (req, res) {
        const {offset, limit, orderBy} = req.query;
        const backendResponse = await axios.get(`${process.env.BACKEND_HOST}/${baseUrl}/celebrities?limit=${limit || ''}&offset=${offset || ''}&orderBy=${orderBy || ''}`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
}
