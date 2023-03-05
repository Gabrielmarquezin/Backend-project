const express = require('express')
const Route = express.Router()
const produtos = require('../data/getMercado1.js')
const EstatisticaController = require('../controller/estatistica_controller')
const StatistiController = require('../controller/estatistica_controller')

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

Route.get('/:mercado/produtos', StatistiController)

module.exports = Route