const express = require('express')
const RouteCat = express.Router()
const produtos = require('../data/getMercado1.js')

RouteCat.get('/mercados/categorias', async(req, res)=>{
   try {
        const categorias = await produtos.getCategorias()
        res.status(200).send(categorias)
   } catch (error) {
        res.status(404).send({message: error})
   }
})

module.exports = RouteCat