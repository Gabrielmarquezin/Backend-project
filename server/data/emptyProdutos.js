const db = require('../infra/conection.js')
const bd = require('../infra/conection.js')

class Check{
     setAdd(obj, collection){
        this.obj = obj
        this.collection = collection
    }

    setUpdate(dataUpdate, id, collection){
        this.objUpdate = dataUpdate
        this.idDcoc = id
        this.collection = collection
    }

    setDelete(dataDelete, collection){
        this.obj = dataDelete
        this.collection = collection
    }

    setVerification(data, collection){
        this.obj = data
        this.collection = collection
    }

    async EmptyProduto(){
        const ref = db.collection(this.collection).where('marca','==', this.obj.marca || this.obj.market).where('tipo', '==', this.obj.tipo)
        const classificacao = this.obj.classificacao
        const estado = this.obj.estado
        const tamanho = this.obj.tamanho || this.obj.pesoG || this.pesoKG

        try {
            const res = await db.runTransaction(async t => {
                const docs = await t.get(ref)
                var idDoc;
                var empty;
                docs.forEach(doc => {
                    const docClassifi = doc.data().classificacao
                    const docEstado = doc.data().estado
                    const docTamanho = doc.data().pesoG || doc.data().pesoKG || doc.data().tamanho || doc.data().volumeL || doc.data().volumeML || null

                    if((classificacao == docClassifi) && (estado == docEstado) && (tamanho == docTamanho)){
                        idDoc = doc.id
                        empty =  'exist'
                    }
                })
                
                return {idDoc: idDoc || 'DontExist', empty: empty || 'DontExist'}
            })

            return res

        } catch (error) {
            console.log(error)
            return {msg: 'dontExist'}
        }
    }

    async Update(){
        try {
            const udpateDoc = await db.collection(this.collection).doc(this.idDcoc).update(this.objUpdate)
            return {update: true}
    
        } catch (error) {
            console.log('algo deu errado: '+error)
        }
    }

    async addProduto(){
        try {
            const EmptyProduto = await this.EmptyProduto()
            const empty = EmptyProduto.empty
    
            if(empty == 'DontExist'){
                const addDoc = await db.collection(this.collection).add(this.obj)
                return {add: true}
            }else{
                return {add: false}
            }
            
        } catch (error) {
            console.log('algo deu errado: '+error)
        }
        
    }

    async deleteProduto(){
        try {

            const EmptyProduto = await this.EmptyProduto()
            const idDoc = EmptyProduto.idDoc
            const empty = EmptyProduto.empty
    
            if(empty == 'exist'){
                const deleteDoc = await db.collection(this.collection).doc(`${idDoc}`).delete()
                return {delete: true}
            }else{
                return {delete: false}
            }
            
        } catch (error) {
            console.log('algo deu errado: '+error)
        }
    }
}

const Checked = new Check()

module.exports = Checked

