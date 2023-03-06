
function calStatistic(arrayModify){
    let moda;

    let Media = arrayModify.reduce((previusValue, currentValue) =>{
        return previusValue+currentValue/arrayModify.length
    }, 0)
    Media =  parseFloat(Media.toFixed(2))

    let Variancia = arrayModify.reduce((previusValue, currentValue)=>{
        return previusValue + Math.pow(Media - currentValue, 2)/arrayModify.length
    }, 0)
    Variancia =  parseFloat(Variancia.toFixed(2))

    let DesvioPadrao = parseFloat(Math.sqrt(Variancia).toFixed(2))

    if(Media == arrayModify[0]){
        moda = Media
    }else{
        moda =  Moda(arrayModify)
    }

    return {Media: Media, Variancia: Variancia, DesvioPadrao: DesvioPadrao, Moda: moda}
}


function Moda(arr){
    let contValues = Object.create(null)
    let moda;

    for(let values of arr){
        if(!contValues[values]){
            contValues[values] = 1
        }else{
            contValues[values]++
        }
    }

    let objValues = Object.entries(contValues).map(([value, cont])=>{
        return {
            value: parseFloat(value),
            cont: cont
        }
    })

    let maxValue = objValues.reduce((a, b)=>{
        return a.cont > b.cont ? a:b
    })
   
    if(maxValue.cont == 1){
        moda = "Nao identificado"
    }else{
        moda = parseFloat(maxValue.value.toFixed(2))
    }
    
    return moda;
}

module.exports = calStatistic