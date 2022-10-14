const express = require('express')
const Route = express.Router()
const produtos = require('../data/getMercado1.js')

Route.get('/:mercado', async (req, res)=>{
    try {
        const mercado = req.params.mercado
        produtos.setTipo(null, mercado)

        const dataProduct = await produtos.getAll()
        res.status(200).send(dataProduct)
    } catch (error) {
       res.status(404).send({message:'nao encontrado'})
    }
})

Route.get('/:mercado/produtos', async (req, res)=>{
    try {
        const mercado = req.params.mercado
        const tipo = req.query['tipo']
        const tamanho = req.query['tamanho']
        
        produtos.setTipo(tipo, mercado, tamanho)
        const dataProduct = await produtos.getProduct()
        
        if(dataProduct){
            res.status(200).send(dataProduct)
        }
    } catch (error) {
        res.status(404).send({message:'nao encontrado'})
    }
})

module.exports = Route