const router = require('express').Router()
const ctrl = require('../controllers/veiculoController')

router.get('/', ctrl.index)
router.get('/:placa', ctrl.show)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)

module.exports = router