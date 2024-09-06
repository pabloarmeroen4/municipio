const departamentomodel = require('../models/departamentomodels')

async function obtenerdepartamentos (req , res) {
    try {
        const resultado=await departamentomodel.getAlldepartamentos();
        res.json(resultado)
    }
    catch (e) {
        res.send("hay un error")
    }
}


function agregardepartamentos (req , res) {
    try {
        res.send("agregaste departamento")
    }
    catch (e) {
        res.send("hay un error")
    }
}


function eliminardepartamentos (req , res) {
    try {
        res.send("eliminaste departamento")
    }
    catch (e) {
        res.send("hay un error")
    }
}




module.exports={obtenerdepartamentos , agregardepartamentos , eliminardepartamentos}


