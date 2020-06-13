const express = require('express')
const recetteController = require('../controller/recette')

const router = express.Router()

router.delete('/:id', recetteController.deleteRecetteById)
router.put('/:id', recetteController.updateRecetteById)
router.get('/:id', recetteController.getRecetteById)
router.post('/', recetteController.createRecette)
router.get('/', recetteController.getRecettes)

module.exports = router;