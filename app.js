const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hi, fishers!'))
app.listen(port, () => console.log(`This app listening on port ${port}`))