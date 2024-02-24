const express = require('express');
const conectarDB = require("../db/conectiondb.js")
const modelCountry = require("../db/modelCountry.js")
const cors = require("cors")
const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

//get para recibir datos
app.get('/countries', async (req, res) => {
    const response = await modelCountry.find({})
    res.json(response)
})

//post para enviar datos
app.post('/countries', async (req, res) => {
    const body = req.body
    await modelCountry.create(body)
    res.json({
        message: "El objeto se creo de manera exitosa",
        body: body
    })
})


conectarDB()

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

