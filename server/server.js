const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 2000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Ola mundo')
})

app.listen(port, ()=>{
    console.log('rodando no link: http://localhost:2000/')
})

