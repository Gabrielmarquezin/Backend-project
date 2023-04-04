const ProdutoStatistic = require('../service/ProdutoStatics.js')

async function ProdutoController(req, res){
    const id = req.query['id']
    const store  = req.params.mercado

    const collections = ['biga', 'deirton', 'francisco', 'rufino']

    const Produto = new ProdutoStatistic(id, store, collections)

    try {
        const estatistica = await Produto.getStatistic()

        res.status(200).send(estatistica)
    } catch (error) {
        res.status(400).send({message: error})
    }

}

module.exports = ProdutoController