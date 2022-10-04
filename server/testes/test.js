

/*
     TRANSAÇOES 
const db = require('../infra/conection.js')

const docRef = db.collection('user').doc('1')
docRef.set({
   state: 'CA',
   country: 'USA',
   capital: false,
   population: 860000
})

async function o(){
    try {
        const res = await db.runTransaction(async t =>{
            const doc = await t.get(docRef)
            const newPopulation = doc.data().population + 1
            if(newPopulation < 860002){
                await t.update(docRef, {population: newPopulation})
                return 'População atualizada'
            }else{
                throw 'population too long'+newPopulation
            }
        })
        console.log('transação concluida: '+res)
    } catch (error) {
        console.log('error: '+error)
    }
}


      GRAVAÇÃO EM LOTE

const batch = db.batch()

async function setName(nome){
    batch.set(docRef, {nome: 'Gabriel'}, {merge: true})
    batch.update(docRef, {nome: nome})
    const a = await batch.commit()
    console.log(a)
    
}


setName("oafada")

*/