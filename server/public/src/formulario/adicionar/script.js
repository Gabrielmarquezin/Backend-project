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

inputSubmit.addEventListener('click', (e)=>{
    e.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    GetUrlImg(objImg).then(url => {
        data.url = url
        console.log(data)
    })

   
})



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