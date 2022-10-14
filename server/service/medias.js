const produtos = require('../data/getMercado1.js')
const cesta = ['Arroz', 'Feijao', 'Oleo', 'Margarina', 'Macarrao', 'Farinha', 'Leite', 'Cuscuz', 'Sardinha', 'Acucar', 'Bolacha', 'Sal', 'Polpa']

const Media = {

    mercado: async (collection, tamanho)=>{
      var cestaPreco = 0
      var div = 0
      var notFound = []

      for(let item of cesta){
          produtos.setTipo(item, collection, tamanho)
          const data = await produtos.getProduct()

        for(let produto of data){
            if(produto == undefined){
                notFound.push(item)
            }else{
                cestaPreco+=produto.preco
                div++
            }
        }
      }
     return {cestaPreco: cestaPreco, NotFound: notFound, mediaProduto: cestaPreco/div}
    },

    media: async ()=>{
        const setCollection = getMedia(1)
        const biga = await setCollection('biga')
        const Francisco = await setCollection('Francisco')
        const Deirton = await setCollection('Deirton')
        
        const dataArr = [biga.NotFound, Deirton.NotFound, Francisco.NotFound]
        const arr = []
        const NotFound = new Set()
        
        const datas = biga.cestaPreco + Francisco.cestaPreco + Deirton.cestaPreco
        const MediaCesta = datas/3

        dataArr.forEach(e =>{
            e.forEach(element => {
                arr.push(element)
            })
        })
        
        arr.forEach(e => {
            NotFound.add(e)
        })

        return {mediaCesta: MediaCesta, NotFound: [...NotFound.values()]}
    }

}

function getMedia(tamanho){
    return async (mercado)=>{
       const data =  await Media.mercado(mercado, tamanho)
       return data
    }
}

module.exports = Media