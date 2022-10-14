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
         const limitDocs = []
         const nameCollect = this.collection
         const produtos = await bd.collection(nameCollect).where('tipo', '==', `${this.tipo}`).orderBy('preco').get()
         produtos.forEach(product => {
            docs.push(product.data())
         })

        
         if(this.tamanho > 0){
            let tamanhoArr = this.tamanho -1
            let index = 0
            do {
               limitDocs.push(docs[index])
               index ++
            } while (index <= tamanhoArr);

            return limitDocs  
         }else{
            return docs 
         }
            
      } catch (error) {
         return error
      }
   }

   setTipo(type, collection, tamanho){
      this.tipo = type
      this.collection = collection
      this.tamanho = tamanho
   }
   
   
}

const produtos = new Produtos()

module.exports = produtos
