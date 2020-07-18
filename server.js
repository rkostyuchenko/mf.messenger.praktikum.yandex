require('dotenv').config()
const port = process.env.PORT || 3000
const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})