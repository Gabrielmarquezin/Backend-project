const produtos = require('../data/getMercado1.js')
const CalStatistic = require('../service/estatistica')

async function StatistiController(req, res){
    const mercado = req.params.mercado
    const tipo = req.query['tipo']
    const tamanho = req.query['tamanho']

    try {
        
        produtos.setTipo(tipo, mercado, tamanho)
        const getProducts = await produtos.getProduct()

        
        if(getProducts){
            const ProductsPrices = getProducts.map(product => product.preco)
            const staticsData = CalStatistic(ProductsPrices)
            
            const ProductsData = {staticsData, Products: getProducts}
            res.status(200).send(ProductsData)
        }
    } catch (error) {
        res.status(404).send({message:'nao encontrado'})
    }
}

module.exports = StatistiController