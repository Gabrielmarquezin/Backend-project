const express = require('express')
const RoutePost = express.Router()
const produtos = require('../data/getMercado1.js')
const Checked = require('../data/emptyProdutos.js')
const tipo = require('../data/getCategoria.js')
const { response } = require('express')
const atributos = require('../data/getAtributs.js')
const Proudutos = require('../service/ProdutoService')

RoutePost.use(express.json())
RoutePost.use(express.urlencoded({extended: false}))

RoutePost.post('/pages/atualizar', async (req, res)=>{
    const market = req.body.market
    const codigo = req.body.codigo
    const obj = req.body

    const Produto = new Proudutos(market, codigo)

    try {
        const up = await Produto.Update(obj)
        

        res.json(up)
    } catch (error) {
        res.json("no-document")
    }
     
})


RoutePost.post('/pages/criar', async(req, res)=>{
    try {    
         const obj = req.body

         const atributs = await atributos.getAtributos()
    
         if(req.body.tipo == 'nenhum'){
             obj.tipo = null
         }else{
             obj.tipo = req.body.tipo.toLowerCase()
         }
    
         if(req.body.marca == 'nenhum'){
             obj.marca = null
           
         }else{
             obj.marca = req.body.marca.toLowerCase()
         }
    
         if(req.body.estado == 'nenhum'){
             obj.estado = null
         }
    
         if(req.body.classificacao == 'nenhum'){
             obj.classificacao = null
         }
    
         if(req.body.tamanho == 0){
             obj.tamanho = null
         }else{
             obj.tamanho = parseFloat(req.body.tamanho)
         }
    
         obj.preco = parseFloat(req.body.preco)
    
         Checked.setAdd(obj, obj.market)
         const emptyDoc = await Checked.EmptyProduto()
         const add = await Checked.addProduto()
    
         tipo.setCat('categorias')
         const tipos = await tipo.getCat()
    
         if(add.add){
             res.render('formulario/Adicionar/add', {categorias: tipos, empty: emptyDoc.empty, classificacoes: atributs.classificacoes, estados: atributs.estados})
         }else{
             res.render('formulario/Adicionar/add', {categorias: tipos, empty: emptyDoc.empty, classificacoes: atributs.classificacoes, estados: atributs.estados})
         }
    
    } catch (error) {
        console.log('algo de errado: '+error)
    }
    
})

RoutePost.post('/pages/deletar', async (req, res)=>{
    const market = req.body.market
    const idProduto = req.body.codigo

    const Prouduto = new Proudutos(market, idProduto)
    try {
       const deleta = await Prouduto.Delete()

       res.json(deleta)
    } catch (error) {
      res.json("no-document")
    }

})
module.exports = RoutePost