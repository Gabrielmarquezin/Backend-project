const express = require('express')
const route = express.Router()
const produtos = require('../data/getMercado1.js')
const Media = require('../service/medias')

route.get('/mercados/media/:mercado', async (req, res)=>{
    try {
        const store  = req.params.mercado
        const tamanho = req.query['tamanho']
    
        const dataMedia = await Media.mercado(store, tamanho)
        res.status(200).send(dataMedia)
    } catch (error) {
        res.status(404).send({erro: error})
    }
})

route.get('/mercados/media', async (req, res)=>{
    try {
        const MediaCesta = await Media.media()
        res.status(200).send(MediaCesta)
    } catch (error) {
        res.status(404).send({erro: error})
    }
})



module.exports = route
