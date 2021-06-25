
module.exports = (app, agent) => {
    const axios = require('axios');
    const baseUrl = `comments`

    app.post(`/${baseUrl}`, async function (req, res) {
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.delete(`/${baseUrl}/items/:id`, async function (req, res) {
        const {id} = req.params;
        const backendResponse = await axios.delete(`${process.env.BACKEND_HOST}/${baseUrl}/items/${id}`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.delete(`/${baseUrl}/celebrities/:id`, async function (req, res) {
        const {id} = req.params;
        const backendResponse = await axios.delete(`${process.env.BACKEND_HOST}/${baseUrl}/celebrities/${id}`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.post(`/${baseUrl}/items/react/:id`, async function (req, res) {
        const {id} = req.params;
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}/items/react/${id}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
    app.post(`/${baseUrl}/celebrities/react/:id`, async function (req, res) {
        const {id} = req.params;
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}/celebrities/react/${id}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })
}
