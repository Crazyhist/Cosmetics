const uuid = require('uuid')
const path = require('path')
const {Cosmetic, CosmeticInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class CosmeticController {
    async create (req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const cosmetic = await Cosmetic.create({name, price, brandId, typeId, img: fileName})

            if (info) {
                info = JSON.parse(info) // данные через форм дата приходят в виде строки, парсим массив в json
                info.forEach(i =>
                        CosmeticInfo.create({
                        title: i.title,
                        description: i.description,
                        cosmeticId: cosmetic.id
                    })
                )

            }
            return res.json(cosmetic)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) { //limit page - лимит товраов (может быть 1000 товаров)
        let {brandId, typeId, limit, page} = req.query // получение из строки запроса
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit //отступ
        let cosmetics
        if (!brandId && !typeId) {
            cosmetics = await Cosmetic.findAndCountAll({ limit, offset}) //findAndCountAll для пагинации
        }
        if (brandId && !typeId) {
            cosmetics = await Cosmetic.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            cosmetics = await Cosmetic.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            cosmetics = await Cosmetic.findAndCountAll({where:{brandId,typeId}, limit, offset})
        }
        return res.json(cosmetics)
    }
    async getOne(req, res) {
        const {id} = req.params
        const cosmetic = await Cosmetic.findOne(
            {
                where: {id},
                include: [{model: CosmeticInfo, as: 'info'}]
            }
        )
    return res.json(cosmetic)
    }
}


module.exports = new CosmeticController()