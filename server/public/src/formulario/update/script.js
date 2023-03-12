import { GetUrlImg } from "../adicionar/fileUrl.mjs";

const $file = document.getElementById('file');
const $label = document.querySelector('#img label');
const $span = document.querySelector('#img span');
var objImg = {}
$file.value = ""

$file.addEventListener('change', (e)=>{
    const filee = e.target.files[0]
   
    
    if(filee){
        const reader = new FileReader()
        
        reader.addEventListener('load', (e)=>{
            const target = e.target
            const img = document.createElement('img')
            img.classList.add('picture')
            img.src = target.result

            $span.innerHTML = ""
            $label.innerHTML = ""
            $label.appendChild(img)
         })
         objImg = filee

         reader.readAsDataURL(filee)

    }else{
        $span.innerHTML = "ESCOLHA UMA IMAGEM";
    }
})


const form = document.getElementById('form')
const inputSubmit = document.getElementById('btnSubmit')
const load = document.getElementById('load')

inputSubmit.addEventListener('click', async (e)=>{

     e.preventDefault()

     load.classList.toggle('blocked')
     inputSubmit.innerHTML = ''

     const formData = new FormData(form)
     const dataFo = Object.fromEntries(formData)
    
     if(dataFo.preco !== ''){
        dataFo.preco = parseFloat(dataFo.preco)
     }

     if(dataFo.peso !== ''){
        dataFo.peso = parseFloat(dataFo.peso)
     }

     const data = Object.fromEntries(Object.entries(dataFo).filter(([k,v])=>{
        return v != "" &&  k != 'file'
     }))

      try {
          if($file.value !== ""){
            const url = await GetUrlImg(objImg)
            data.img = url
          }

          const request = await fetch("https://backend-project-jpcgox174-gabrielmarquezin.vercel.app/pages/atualizar", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
          })

          

          const res = await request.json()
          
          load.classList.toggle('blocked')
          inputSubmit.innerHTML = 'ADICIONAR'

          if(res == 'no-document'){
            alert('CODIGO INVALIDO')
          }else{
            alert('Atualizado')
          }
 
      } catch (error) {
        console.log(error)
      }
})

const validation = document.getElementById('validation').innerText

if(validation == 'no-document'){
    alert('CODIGO INVALIDO')
}

if(validation == 'atualizado'){
    alert('DOCUMENTO ATUALIZADO')
}


