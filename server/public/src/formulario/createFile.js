import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
const inputfile = document.querySelector('#img')
const spanimg = document.getElementById('img-span')

const storage = getStorage();
const urlInput = document.getElementById('url')
const enviar = document.getElementById('enviar')


const validation = document.getElementById('validation').innerText

if(validation == 'exist'){
    alert('DOCUMENTO JA EXISTE, ADICIONE UM NOVO')

}else if(validation == 'DontExist'){
    alert('DOCUMENTO ADICIONADO')
}


inputfile.addEventListener('change', e =>{
    const inputTarget = e.target
    const file = inputTarget.files[0]
   
    const spaceRef = ref(storage, `ProdutosImagens/${file.name}`);
    
    if(file){
        const reader = new FileReader()
        
        reader.addEventListener('load', e => {
            const readTarget = e.target
            const img = document.createElement('img')
            img.src = readTarget.result
            img.classList.add('img_select')
            
            spanimg.innerHTML = ''
            spanimg.appendChild(img)

            const uploadTask = uploadBytesResumable(spaceRef, file)
            uploadTask.on('state_changed',(snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                let cont = progress
                if(cont <= 100){
                    enviar.setAttribute('disabled', '')
                }
            },

            (error)=>{},
            
            //sucesso e input
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    enviar.removeAttribute('disabled')

                    function getUrl(){
                        urlInput.value = downloadURL
                    }

                    getUrl()
                  });
            })
        })

        reader.readAsDataURL(file)
    }
})


