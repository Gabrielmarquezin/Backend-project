
const form = document.getElementById('form')
const inputSubmit = document.getElementById('btnSubmit')
const load = document.getElementById('load')


inputSubmit.addEventListener('click', async (e)=>{

    e.preventDefault()

    load.classList.toggle('blocked')
    inputSubmit.innerHTML = ''

    const formData = new FormData(form)
    const dataFo = Object.fromEntries(formData)
   
     try {
        const request = await fetch("https://backend-project-dusky.vercel.app/pages/deletar", {
             method: "POST",
             headers: {
               "Content-Type": "application/json"
             },
             body: JSON.stringify(dataFo)
         })

         

         const res = await request.json()
         
         load.classList.toggle('blocked')
         inputSubmit.innerHTML = 'ADICIONAR'

         if(res == 'no-document'){
            alert("Codigo Invalido")
         }else{
            alert("Produto deletado")
         }
     } catch (error) {
       console.log("esse e o erro:  "+error)
     }
})





