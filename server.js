const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
app.use(cors())

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/checkServer', (req, res) => {
    console.log('connect server check')
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})