const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 2000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res)=>{
    const obj = require('../server/data/getMercado1.js')
    obj.getProduct().then(a =>{
        res.send(a)
    })
})

app.listen(port, ()=>{
    console.log('rodando no link: https://ceara-cientifico.herokuapp.com/')
})

