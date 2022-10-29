const condition = document.getElementById('condition').innerText
console.log(condition)

const btn = document.getElementById('btn')
const voltar = document.getElementById('voltar')

const frontForm = document.getElementById('front-form')
const backForm = document.getElementById('back-form')

const master = document.getElementById('master')

const Windowlargura = window.innerWidth

if(condition == 'exist'){
       
        backForm.classList.toggle('back-form-none')
        FlipForm()
        heightMaster()

}else if(condition == 'DontExist'){
    alert('DOCUMENTO NAO ENCONTRADO, COLOQUE VALORES VALIDOS')

}else if(condition == 'atualizado'){
    alert('DOCUMENTO ATUALIZADO')
}

voltar.addEventListener('click', (e)=>{
    backForm.classList.toggle('back-form-none')
    FlipForm()
    heightMaster()
})

function FlipForm(){
    const classe = frontForm.className.indexOf('front-form-rotate')
    frontForm.classList.toggle('front-form-rotate')
    backForm.classList.toggle('back-form-rotate')
}

function heightMaster(){
    const heghtFront = frontForm.offsetHeight;
    
    const heightBack = backForm.offsetHeight
    const classe = backForm.className

    if(classe.indexOf('back-form-rotate') !== -1){
        if(Windowlargura <= 900){
            master.style.height = 81 + 'vh'
        }else{
            master.style.height = 85 + 'vh'
        }
    }
    
    if(classe.indexOf('back-form-rotate') == -1){
        const master = document.getElementById('master')
        master.style.height = heghtFront +'px'
    }
}

