//Deirton
const dataDeirton = require('../../datas/mercado3.js')
const db = require('../../../server/infra/conection.js')
const batch = db.batch()

async function setDoc(){
    dataDeirton.forEach(element => {
        const docRef = db.collection('deirton').doc()
        batch.set(docRef, element)
    })

    const response = await batch.commit()
    console.log(response)
}

setDoc()