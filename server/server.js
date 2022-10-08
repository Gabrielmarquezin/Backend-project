const express = require('express')
const cors = require('cors')
const app = express()
const Route = require('./route/routeBiga.js')
const port = process.env.PORT || 2000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/', Route)

app.listen(port, ()=>{
    console.log('rodando no link: https://ceara-cientifico.herokuapp.com/')
})


/*
const mercado = req.params.mercado
    const tipo = req.query['tipo']
    produtos.setTipo(tipo, mercado)
    produtos.getProduct().then(a =>{
        res.send(a)
    })
*/