
const $file = document.getElementById('file');
const $label = document.querySelector('#img label');
const $span = document.querySelector('#img span');

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
        
         reader.readAsDataURL(filee)

    }else{
        $span.innerHTML = "ESCOLHA UMA IMAGEM";
    }
})


const form = document.getElementById('form')
const inputSubmit = document.getElementById('btnSubmit')
const load = document.getElementById('load')

form.addEventListener('submit', async (e)=>{

     e.preventDefault()

     load.classList.toggle('blocked')
     inputSubmit.innerHTML = ''

     const formData = new FormData(form)
     console.log(formData)
  
      try {
         
          const request = await fetch("http://backend-project-l0bm1asm2-gabrielmarquezin.vercel.app/pages/atualizar", {
              method: "POST",
              body: formData
          })

          
          const res = await request.json()
          
          load.classList.toggle('blocked')
          inputSubmit.innerHTML = 'ADICIONAR'

          console.log(res)

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


