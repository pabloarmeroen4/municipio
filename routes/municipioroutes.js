const express = require('express')
const router = express.Router()
const municipiocontrol  = require('../controllers/municipiocontrollet')

router.get('/municipio',municipiocontrol.obtenermunicipio)

router.post('/municipio',municipiocontrol.agregarmunicipio)

router.delete('/municipio',municipiocontrol.eliminarmunicipio)


module.exports=router
