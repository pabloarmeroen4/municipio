const express = require('express');
const router = express.Router();
const departamentocontroller=require('../controllers/departamentC')

router.get('/departamentos',departamentocontroller.obtenerdepartamentos)

router.post('/departamentos',departamentocontroller.agregardepartamentos)

router.delete('/departamentos',departamentocontroller.eliminardepartamentos)


module.exports=router
