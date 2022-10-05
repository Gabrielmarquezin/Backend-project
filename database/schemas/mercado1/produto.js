const dataBiga = require('../../datas/mercado1.js')
const db = require('../../../server/infra/conection.js')
const batch = db.batch()

async function setDoc(){
    dataBiga.forEach(product =>{
        const docRef = db.collection('biga').doc()
        batch.set(docRef, product)
    })

    const response = await batch.commit()
    console.log(response)
}
setDoc()


