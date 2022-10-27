const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')


class TypeController {
    // создание типов (в субд pg появляются в таблице type)
        async create (req, res, next) {
            // try {
                const {name} = req.body
                const type = await Type.create({name})
                return res.json(type)
        // }   catch (e) {
        // next(ApiError.badRequest(e.message))
        //     }
        }
        // получение типов
    async getAll (req, res) {
        const types = await Type.findAll() // возвращает все сущ. данны в бд
        return res.json(types) // возвращаем полностью на клиент массив объектов
    }
}
// пробнуть доделать
module.exports = new TypeController()