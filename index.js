const express  = require('express')
const app = express()
const PORT = 5000
const departamentoroutes=require ('./routes/departamentoroutes.js')
const municipioroutes = require('./routes/municipioroutes.js')
app.use(express.json())

app.use('/api',departamentoroutes)

app.use('/api',municipioroutes)


app.listen(PORT, () => {
    console.log("servidor listo en puerto 5000")
})