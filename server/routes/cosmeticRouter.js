const Router = require('express')
const router = new Router()
const cosmeticController = require('../controllers/cosmeticController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),cosmeticController.create)
router.get('/', cosmeticController.getAll)
router.get('/:id',cosmeticController.getOne)

module.exports = router