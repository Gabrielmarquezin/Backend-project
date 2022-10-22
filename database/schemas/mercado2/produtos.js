//modelo do objeto
const dataFranciso = require('../../datas/mercado2.js')
const db = require('../../../server/infra/conection.js')
const batch = db.batch()

async function setDoc(){
    dataFranciso.forEach(element =>{
        const refDoc = db.collection('francisco').doc()
        batch.set(refDoc, element)
    })

    const response = await batch.commit()
    console.log(response)
}

setDoc()

