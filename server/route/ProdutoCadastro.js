const express = require('express')
const RoutePost = express.Router()
const produtos = require('../data/getMercado1.js')
const Checked = require('../data/emptyProdutos.js')
const tipo = require('../data/getCategoria.js')
const { response } = require('express')
const atributos = require('../data/getAtributs.js')

RoutePost.post('/pages/atualizar', async (req, res)=>{
    try {
        tipo.setCat('categorias')
        const tipos = await tipo.getCat()

        const atributs = await atributos.getAtributos()
    
        const obj = {}
        const objVerification = {
            tipo: req.body.tipof,
            marca: req.body.marcaf,
            estado: req.body.estadof,
            tamanho: parseInt(req.body.tamanhof),
            classificacao: req.body.classificacaof,
            next: req.body.next
        }
    
        if(objVerification.estado == 'nenhum'){
            objVerification.estado = null
        }
        
    
        if(req.body.tipo !== 'nenhum'){
            obj.tipo =  req.body.tipo
        }
    
        if(req.body.marca !== 'nenhum'){
            obj.marca = req.body.marca
        }
    
        if(req.body.estado !== 'nenhum'){
            obj.estado = req.body.estado
        }
    
        if(req.body.classificacao !== 'nenhum'){
            obj.classificacao = req.body.classificacao
        }
    
        if(req.body.tamanho !== 'nenhum'){
            obj.tamanho = parseFloat(req.body.tamanho)
        }
    
        if(req.body.descricao !== 'nenhum'){
            obj.descricao = req.body.descricao
        }
    
        if(req.body.img !== 'nenhum'){
            obj.img = req.body.img
        }
        
        if(req.body.descricao !== 'nenhum'){
            obj.descricao = req.body.descricao
        }
    
        if(req.body.mercado !== 'nenhum'){
            obj.mercado = req.body.mercado
        }
    
        if(req.body.idDoc !== 'nenhum'){
            obj.idDoc = req.body.idDoc 
        }
    

        if(objVerification.next == 'next'){
            Checked.setVerification(objVerification, req.body.marketf)
            const response = await Checked.EmptyProduto()
    
            res.render('formulario/update', {categorias: tipos, idDoc: response.idDoc, empty: response.empty, mercado: req.body.marketf, classificacoes: atributs.classificacoes, estados: atributs.estados})
        }else{
    
            const dataUpdate = Checked.setUpdate(obj, obj.idDoc, obj.mercado)
            const update = await Checked.Update()
    
            res.render('formulario/update', {categorias: tipos, idDoc: false, empty: 'atualizado', mercado: false, classificacoes: atributs.classificacoes, estados: atributs.estados})
        }
        
    } catch (error) {
        console.log('algo de errado: '+error)
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
            res.render('formulario/criar', {categorias: tipos, empty: emptyDoc.empty, classificacoes: atributs.classificacoes, estados: atributs.estados})
        }else{
            res.render('formulario/criar', {categorias: tipos, empty: emptyDoc.empty, classificacoes: atributs.classificacoes, estados: atributs.estados})
        }
    
    } catch (error) {
        console.log('algo de errado: '+error)
    }
    
})

RoutePost.post('/pages/deletar', async (req, res)=>{
    
    try {
        tipo.setCat('categorias')
        const tipos = await tipo.getCat()

        const atributs = await atributos.getAtributos()

        const objDelete = req.body

        if(objDelete.estado == 'nenhum'){
            objDelete.estado = null
        }
    
        if(objDelete.classificacao == 'nenhum'){
            objDelete.classificacao == null
        }
    
        parseFloat(objDelete.tamanho)

        Checked.setDelete(objDelete, objDelete.market)
        const response = await Checked.EmptyProduto()
        const deletar = await Checked.deleteProduto()
        
       
        if(deletar.delete){
            res.render('formulario/excluir', {categorias: tipos, empty: 'excluido', classificacoes: atributs.classificacoes, estados: atributs.estados})
        }else{
            res.render('formulario/excluir', {categorias: tipos, empty: 'notExcluido', classificacoes: atributs.classificacoes, estados: atributs.estados})
        }
        
    } catch (error) {
        console.log('algo de errado: '+error)
    }

})
module.exports = RoutePost