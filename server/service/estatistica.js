
function calStatistic(arrayModify){
    let Media = arrayModify.reduce((previusValue, currentValue) =>{
        return previusValue+currentValue/arrayModify.length
    }, 0)
    Media =  parseFloat(Media.toFixed(2))

    let Variancia = arrayModify.reduce((previusValue, currentValue)=>{
        return previusValue + Math.pow(Media - currentValue, 2)/arrayModify.length
    }, 0)
    Variancia =  parseFloat(Variancia.toFixed(2))

    let DesvioPadrao = parseFloat(Math.sqrt(Variancia).toFixed(2))

    return {Media: Media, Variancia: Variancia, DesvioPadrao: DesvioPadrao}
}


module.exports = calStatistic