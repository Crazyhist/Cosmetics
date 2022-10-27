const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), brandController.create) //создание бренда
router.get('/', brandController.getAll)// получить все бренды
router.delete('/',)// удаление бренда

module.exports = router