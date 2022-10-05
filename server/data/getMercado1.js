const bd = require('../infra/conection.js')



class Produtos{

   async getProduct(){
     const arr = []
     const getdata = await bd.collection('biga').orderBy('preco').get()
     getdata.forEach(async pruducts =>{
        arr.push(pruducts.data())
     })

     return arr
   }
}

const obj = new Produtos()

module.exports = obj
