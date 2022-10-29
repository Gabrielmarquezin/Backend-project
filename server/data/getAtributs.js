const db = require('../infra/conection.js')


class MetaDados{
    async getAtributos(){

        try {
            
            const dataDeirton = await db.collection('deirton').get()
            const dataBiga = await db.collection('biga').get()
            const dataFrancisco = await db.collection('francisco').get()
    
            const BigData = [dataDeirton, dataBiga, dataFrancisco]
            const ArrClass = []
            const Estados = []
    
            BigData.forEach(e => {
                e.forEach( p => {
                   ArrClass.push(p.data().classificacao)
                   Estados.push(p.data().estado)
                })
            })
    
            const set = new Set()
            const setEstado = new Set()
    
            ArrClass.forEach(e => {
                set.add(e)
            })
    
            Estados.forEach(e => {
                setEstado.add(e)
            })

            return({classificacoes: [...set.values()], estados: [...setEstado.values()]})
            
        } catch (error) {
            console.log('algo de errado: '+error)
        }

        
    }
}

const Atributos = new MetaDados()

module.exports = Atributos