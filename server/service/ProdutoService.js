const db = require("../infra/conection")

class Produto{
    constructor(market, idProduto){
        this.market = market
        this.idProduto = idProduto
    }

    async Update(Data){
        const collectionName = this.market
        const docId = this.idProduto

        const docRef =  db.collection(collectionName).doc(docId)

        try {
          const res =  await docRef.update(Data)

          return 'atualizado'
        } catch (error) {
           throw error
        }
    }

    async Delete(){
        const collectionName = this.market
        const docId = this.idProduto

        try {
            const res = await db.collection(collectionName).doc(docId).delete();
            return "deletado"
        } catch (error) {
            console.log(error)
            throw "codigo invalido"
        }
    }
}

module.exports = Produto