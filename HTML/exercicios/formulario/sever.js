const express = require('express')
const app = express()
const bodyParser = require ('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('http://localhost:3003/usuarios',(req, resp)=> {
    console.log(req.body)
    resp.send('<h1>Parabens Ze</h1>')
})

app.listen(3003)
