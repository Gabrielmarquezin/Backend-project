const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const Route = require('./route/routeBiga.js')
const route = require('./route/routeMedia.js')
const RouteCat = require('./route/categorias.js')
const port = process.env.PORT || 2000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))
console.log(path.join(__dirname, 'public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))

app.use('/', Route)
app.use('/', route)
app.use('/', RouteCat)

app.get('/', (req, res)=>{
    res.render('index')
    
})

app.get('/pages/criar', (req, res)=>{
    res.render('formulario/criar')
})


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