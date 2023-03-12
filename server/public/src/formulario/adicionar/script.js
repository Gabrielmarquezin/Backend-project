

const $file = document.getElementById('file');
const $label = document.getElementById('labelfile');
const $span = document.querySelector('#labelfile span');
const $urlInput = document.getElementById('url')
var objImg = {}

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

//form

const form = document.getElementById('form')
const inputSubmit = document.getElementById('btnSubmit')
const load = document.getElementById('load')

  form.addEventListener('submit', async (e)=>{
     
       e.preventDefault()

       load.classList.toggle('blocked')
       inputSubmit.innerHTML = ''

       const formData = new FormData(form)
       const data = Object.fromEntries(formData)

       try {
           const request = await fetch("http://backend-project-l0bm1asm2-gabrielmarquezin.vercel.app/pages/criar", {
               method: "POST",
               body: formData
           })

           const res = await request.json()

           console.log(res)
           if(res == 'dontExiste'){
              alert("Documento adicionado")
           }else{
              alert("Documento ja existe, adicione um novo")
           }
        
           load.classList.toggle('blocked')
           inputSubmit.innerHTML = 'ADICIONAR'
       } catch (error) {
           load.classList.toggle('blocked')
           inputSubmit.innerHTML = 'ADICIONAR'
           console.log(error)
       }
  })


//  form.addEventListener('submit', (e)=>{
//      e.preventDefault()
    

//      fetch('http://localhost:2000/pages/criar', {
//          method: 'POST',
//          body: new FormData(form)
//        })
//        .then((response) => {
//          console.log(response);
//        });
//  })