const municipiomodel = require('../models/municipiomodels')

async function obtenermunicipio (req , res) {
    try {
        const resultado=await municipiomodel.getAllmunicipios();
        res.send("este es obtenermunicipio")
    }
    catch (e) {
        res.send("hay un error")
    }
}


function agregarmunicipio (req , res) {
    try {
        res.send("agregaste departamento")
    }
    catch (e) {
        res.send("hay un error")
    }
}


function eliminarmunicipio (req , res) {
    try {
        res.send("eliminaste departamento")
    }
    catch (e) {
        res.send("hay un error")
    }
}




module.exports={obtenermunicipio , agregarmunicipio , eliminarmunicipio}


