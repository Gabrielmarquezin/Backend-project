const express = require('express')
const RoutePost = express.Router()
const produtos = require('../data/getMercado1.js')
const Checked = require('../data/emptyProdutos.js')
const tipo = require('../data/getCategoria.js')
const atributos = require('../data/getAtributs.js')
const Proudutos = require('../service/ProdutoService')

const uploadFile = require('../controller/fileUrl')
const multer = require('multer')
const { file } = require('googleapis/build/src/apis/file/index.js')
const upload = multer()


RoutePost.use(express.json())
RoutePost.use(express.urlencoded({extended: true}))



RoutePost.post('/pages/atualizar',upload.any(), async (req, res)=>{

    const {body,files} = req

    const market = body.market
    const codigo = body.codigo
    const obj = body
    let id;

    if(files && !typeof files == 'undefined'){
        for(let i = 0; i<files.length; i++){
            const a = await uploadFile(files[i])
            id = a
        }
    
        let link = `https://docs.google.com/uc?id=${id}`
        obj.img = link
     }


    if(obj.preco !== ''){
        obj.preco = parseFloat(obj.preco)
     }

     if(obj.peso !== ''){
        obj.peso = parseFloat(obj.peso)
     }

     const updateObj  = Object.create(null)

     const data = Object.entries(obj).filter(([k,v])=>{
        return v != ""
     })

     data.forEach(([v, k])=>{
        updateObj[v] = k
     })

    const Produto = new Proudutos(market, codigo)

    try {
        const up = await Produto.Update(updateObj)

        res.json(up)
    } catch (error) {
        res.json("no-document")
    }
     
})


RoutePost.post('/pages/criar', upload.any(),async(req, res)=>{

    const {body,files} = req

    let id;
    const obj = body
    
    try { 

         if(files){
            for(let i = 0; i<files.length; i++){
                const a = await uploadFile(files[i])
                id = a
            }
        
            let link = `https://docs.google.com/uc?id=${id}`
            obj.img = link
         }

          
          const atributs = await atributos.getAtributos()

    
          if(body.tipo == 'nenhum'){
              obj.tipo = null
          }else{
              obj.tipo = req.body.tipo.toLowerCase()
          }
    
          if(req.body.marca == 'nenhum'){
              obj.marca = null
           
          }else{
              obj.marca = req.body.marca.toLowerCase()
          }
    
          if(body.estado == 'nenhum'){
              obj.estado = null
          }
    
          if(body.classificacao == 'nenhum'){
              obj.classificacao = null
          }
    
          if(body.tamanho == 0){
              obj.tamanho = null
          }else{
              obj.tamanho = parseFloat(body.tamanho)
          }
    
          obj.preco = parseFloat(body.preco)
    
          Checked.setAdd(obj, obj.market)
          const emptyDoc = await Checked.EmptyProduto()
          const add = await Checked.addProduto()
         

          tipo.setCat('categorias')
          const tipos = await tipo.getCat()
    
          if(add.add){
             res.json("dontExiste")
         }else{
             res.json("existe")
         }
    
     } catch (error) {
         console.log('algo de errado: '+error)
     }
    
 })

 RoutePost.post('/pages/deletar', async (req, res)=>{
     const market = req.body.market
     const idProduto = req.body.codigo

     const Prouduto = new Proudutos(market, idProduto)
     try {
        const deleta = await Prouduto.Delete()

        res.json(deleta)
     } catch (error) {
       res.json("no-document")
     }

})
module.exports = RoutePost