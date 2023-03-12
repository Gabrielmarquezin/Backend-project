import { GetUrlImg } from "./fileUrl.mjs";

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

inputSubmit.addEventListener('click', async (e)=>{
     
     e.preventDefault()

     load.classList.toggle('blocked')
     inputSubmit.innerHTML = ''

     const formData = new FormData(form)
     const data = Object.fromEntries(formData)

     try {
         if(objImg !== {}){
            const url = await GetUrlImg(objImg)
            data.img = url
         }

         const request = await fetch("https://backend-project-jpcgox174-gabrielmarquezin.vercel.app/pages/criar", {
             method: "POST",
             headers: {
               "Content-Type": "application/json"
             },
             body: JSON.stringify(data)
         })
        
         load.classList.toggle('blocked')
         inputSubmit.innerHTML = 'ADICIONAR'
     } catch (error) {
         load.classList.toggle('blocked')
         inputSubmit.innerHTML = 'ADICIONAR'
         console.log(error)
     }
})


const validation = document.getElementById('validation').innerText

if(validation == 'exist'){
    alert('DOCUMENTO JA EXISTE, ADICIONE UM NOVO')

}else if(validation == 'DontExist'){
    alert('DOCUMENTO ADICIONADO')
}


// if (file) {
//     const reader = new FileReader();

//     reader.addEventListener("load", function (e) {
//       const readerTarget = e.target;

//       const img = document.createElement("img");
//       img.src = readerTarget.result;
//       img.classList.add("picture__img");

//       pictureImage.innerHTML = "";
//       pictureImage.appendChild(img);
//     });

//     reader.readAsDataURL(file);
//   } else {
//     pictureImage.innerHTML = pictureImageTxt;
//   }