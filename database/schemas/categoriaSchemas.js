const dataCategorias = require('../datas/categorias.js')
const db = require('../../server/infra/conection.js')
const batch = db.batch()

async function setCategorias(){
    dataCategorias.forEach(element=>{
        const docref = db.collection('categorias').doc()
        batch.set(docref, element)
    })

    const response = await batch.commit()
    console.log(response)
}

setCategorias()