const bd = require('../infra/conection.js')


class Categorias{
    setCat(collection, type){
        this.collection = collection
        this.type = type
    }

    async getCat(){
        const catsArr = []
        const cats = await bd.collection(this.collection).where('cat', '!=', 'todos').get()
        cats.forEach(element =>{
            catsArr.push(element.data())
        })

        return catsArr
    }
}

const Tipos = new Categorias()

module.exports = Tipos