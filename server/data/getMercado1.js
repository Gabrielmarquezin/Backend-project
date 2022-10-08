const bd = require('../infra/conection.js')

class Produtos{

   async getAll(){
      try {
         const arr = []
         const getdata = await bd.collection(this.collection).orderBy('preco').get()
         getdata.forEach(pruducts =>{
            arr.push(pruducts.data())
         })
     
         return arr
      } catch (error) {
         return error
      }

   }

   async getProduct(){
      try {
         const docs = []
         const nameCollect = this.collection
         const produtos = await bd.collection(nameCollect).where('tipo', '==', `${this.tipo}`).orderBy('preco').get()
         produtos.forEach(product => {
            docs.push(product.data())
         })
   
         return docs 
      } catch (error) {
         return error
      }
   }

   setTipo(type, collection){
      this.tipo = type
      this.collection = collection
   }

}

const produtos = new Produtos()

module.exports = produtos
