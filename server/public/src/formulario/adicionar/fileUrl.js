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

module.exports = GetUrlImg