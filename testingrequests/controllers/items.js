

module.exports = (app, agent) => {
    const axios = require('axios');
    const baseUrl = `items`
    app.post(`/${baseUrl}`, async function (req, res) {
        const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
        res.status(backendResponse.data.status).json(
            backendResponse.data
    )
  })
  
    app.post(`/${baseUrl}/:id`, async function (req, res) {
        const {id} = req.params;
        const backendResponse = await axios.delete(`${process.env.BACKEND_HOST}/${baseUrl}/${id}`,  {httpsAgent: agent}, {
            httpsAgent: agent, headers: {Authorization: req.headers.authorization}
        });
        res.status(backendResponse.data.status).json(
            backendResponse.data
        )
    })

    app.post(`/${baseUrl}/edit/:id`, async function (req, res) {
        const {id} = req.params;
      const backendResponse = await axios.put(`${process.env.BACKEND_HOST}/${baseUrl}/${id}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
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
    app.get(`/${baseUrl}/top/:topUserType`, async function (req, res) {
        const {topUserType} = req.params;
        const {offset, limit} = req.query;
      const backendResponse = await axios.get(`${process.env.BACKEND_HOST}/${baseUrl}/top/${topUserType}?limit=${limit || ''}&offset=${offset || ''}`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
      res.status(backendResponse.data.status).json(
          backendResponse.data
        )
    })
    app.get(`/${baseUrl}/:id`, async function (req, res) {
        const {id} = req.params;
      const backendResponse = await axios.get(`${process.env.BACKEND_HOST}/${baseUrl}/${id}`, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
      res.status(backendResponse.data.status).json(
          backendResponse.data
        )
    })
    app.post(`/${baseUrl}/link/celebrities/:id`, async function (req, res) {
        const {id} = req.params;
      const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}/link/celebrities/${id}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
      res.status(backendResponse.data.status).json(
          backendResponse.data
        )
    })
    app.post(`/${baseUrl}/link/items/:id`, async function (req, res) {
        const {id} = req.params;
      const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}/link/items/${id}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
      res.status(backendResponse.data.status).json(
          backendResponse.data
        )
    })
    app.post(`/${baseUrl}/unlink/celebrity/:id`, async function (req, res) {
        const {id} = req.params;
      const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}/unlink/celebrity/${id}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
      res.status(backendResponse.data.status).json(
          backendResponse.data
        )
    })
    app.post(`/${baseUrl}/unlink/item/:id`, async function (req, res) {
        const {id} = req.params;
      const backendResponse = await axios.post(`${process.env.BACKEND_HOST}/${baseUrl}/unlink/item/${id}`,  req.body, { httpsAgent: agent, headers: {Authorization: req.headers.authorization} });
      res.status(backendResponse.data.status).json(
          backendResponse.data
        )
    })
}
