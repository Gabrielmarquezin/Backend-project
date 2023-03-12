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


