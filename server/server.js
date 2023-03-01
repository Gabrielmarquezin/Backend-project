const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const Route = require('./route/routeBiga.js')
const route = require('./route/routeMedia.js')
const RouteCat = require('./route/categorias.js')
const RoutePost = require('./route/ProdutoCadastro.js')

const atributos = require('./data/getAtributs.js')
const tipo = require('./data/getCategoria.js')
const { get } = require('http')

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
app.use('/', RoutePost)

app.get('/', (req, res)=>{
    res.render('index')
    
})

app.get('/pages/criar', async(req, res)=>{
    tipo.setCat('categorias')
    const tipos = await tipo.getCat()
    const atributs = await atributos.getAtributos()

    res.render('formulario/criar', {categorias: tipos, empty: false, classificacoes: atributs.classificacoes, estados: atributs.estados})
})

app.get('/pages/atualizar', async(req, res)=>{
    tipo.setCat('categorias')
    const tipos = await tipo.getCat()
    const atributs = await atributos.getAtributos()

    res.render('formulario/update', {categorias: tipos, mercado: false, idDoc: false, empty: false, classificacoes: atributs.classificacoes, estados: atributs.estados})
})

app.get('/pages/deletar', async(req, res)=>{
    tipo.setCat('categorias')
    const tipos = await tipo.getCat()
    const atributs = await atributos.getAtributos()

    res.render('formulario/excluir', {categorias: tipos, empty: false, classificacoes: atributs.classificacoes, estados: atributs.estados})
})

app.listen(port, ()=>{
    console.log('rodando no link:https://backend-project-55nrfinxg-gabrielmarquezin.vercel.app')
})

