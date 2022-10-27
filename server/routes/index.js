const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const cosmeticRouter = require('./cosmeticRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

// сопостовляем маршруты с соотвествующим роутерами
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/cosmetic', cosmeticRouter)


module.exports = router