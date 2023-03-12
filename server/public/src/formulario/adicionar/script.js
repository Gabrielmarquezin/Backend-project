import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSqZZDHXegkRCBTlsaxdhz5ufjl0PleqE",
    authDomain: "cearacientifico-e3e85.firebaseapp.com",
    projectId: "cearacientifico-e3e85",
    storageBucket: "cearacientifico-e3e85.appspot.com",
    messagingSenderId: "450602835743",
    appId: "1:450602835743:web:0a1c02a8265f65f62c5a2a",
    measurementId: "G-HD859J1Y4X"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const GetUrlImg = (file)=>{
    
    const storage = getStorage(app);
    const spaceRef = ref(storage, `ProdutosImagens/${file.name}`);

    const uploadTask = uploadBytesResumable(spaceRef, file)
    
    return new Promise((resolve, rejeject)=>{
        uploadTask.on('state_changed',(snapshot)=>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },

        (error)=>{rejeject(error)},
            
        //sucesso e input
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
               resolve(downloadURL)
            });
        })
    })
}

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