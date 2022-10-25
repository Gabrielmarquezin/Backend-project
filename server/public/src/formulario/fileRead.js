const inputfile = document.querySelector('#img')
const spanimg = document.getElementById('img-select')

inputfile.addEventListener('change', e =>{
    const inputTarget = e.target
    const file = inputTarget.files[0]
    
    if(file){
        const reader = new FileReader()
        
        reader.addEventListener('load', e => {
            const readTarget = e.target
            const img = document.createElement('img')
            img.src = readTarget.result
            img.classList.add('img_select')
            
            spanimg.innerHTML = ''
            spanimg.appendChild(img)
        })

        reader.readAsDataURL(file)
    }
})
