
const db = require("../infra/conection")
const calStatistic = require("./estatistica.js")


class ProdutoStatistic{

    constructor(id, market, collections){
        this.id = id
        this.market = market
        this.collections = collections
    }

    async getStatistic(){
        try {
            const products = await this.getProducts()
            const ProductsPrice = products.map(e => e.preco)

            return calStatistic(ProductsPrice)
        } catch (error) {
            throw error
        }

    }

    async getProducts(){
        const refDoc = db.collection(this.market).doc(this.id)

        try {
            const product = (await refDoc.get()).data()

            if(typeof product === "undefined"){

                throw "idDoc incorreto ou market incorreto"
            }

            const arrProduct = []

            const Products = this.collections.map(async c =>{
                const p = await db.collection(c).where('tipo', '==', product.tipo).where('marca', '==', product.marca).get()
                
                p.forEach(element =>{
                    arrProduct.push(element.data())
                })

                return arrProduct;
            })

            const datas = await Promise.all(Products)

            return datas[0]
        } catch (error) {
            throw error
        }
        
    }
}


module.exports = ProdutoStatistic