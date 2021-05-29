const express = require('express');
const pessoasController = require('../controllers/pessoas')
const router = express.Router();

const model = require('../models/index')


router.get('/', pessoasController.index.bind(null, model.models))

router.post('/create', pessoasController.createProcess.bind(null, model.models))
router.get('/create', pessoasController.createForm)

router.get('/delete/:id', pessoasController.deleteOne.bind(null, model.models))

router.post('/edit/:id', pessoasController.updateProcess.bind(null, model.models))
router.get('/edit/:id', pessoasController.updateForm.bind(null, model.models))

module.exports = router