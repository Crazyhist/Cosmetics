const sequelize = require('../db')
const {DataTypes} = require('sequelize')

// описание модели данных с таблиц

const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'USER'
    }
})

const Basket = sequelize.define('basket',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

const BasketCosmetic = sequelize.define('basket_cosmetic',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

const Cosmetic = sequelize.define('cosmetic', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const Type = sequelize.define('type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

const Brand = sequelize.define('brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

const Rating = sequelize.define('rating', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

const CosmeticInfo = sequelize.define('cosmetic_info', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

//связующая таблица МкМ
const TypeBrand = sequelize.define('type_brand',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketCosmetic)
BasketCosmetic.belongsTo(Basket)

Type.hasMany(Cosmetic)
Cosmetic.belongsTo(Type)

Brand.hasMany(Cosmetic)
Cosmetic.belongsTo(Brand)

Cosmetic.hasMany(Rating)
Rating.belongsTo(Cosmetic)

Cosmetic.hasMany(BasketCosmetic)
BasketCosmetic.belongsTo(Cosmetic)

Cosmetic.hasMany(CosmeticInfo, {as: 'info'})
CosmeticInfo.belongsTo(Cosmetic)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

 // Cosmetic.sync({ force: true }) //обновление модели
// User.sync({ force: true }) //— удаляет существующую таблицу и создает новую
// User.sync({ alter: true }) — приводит таблицу в соответствие с моделью

// Синхронизация всех моделей:
//
//
//    sequelize.sync({ force: true })
// console.log('Все модели были успешно синхронизированы.')
//
// Удаление таблицы:
//
//
//     await User.drop()
// console.log('Таблица `User` была удалена.')
//
// Удаление всех таблиц:
//
//
//     await sequelize.drop()
// console.log('Все таблицы были удалены.')

// Cosmetic.sync({ force: true }) //— удаляет существующую таблицу и создает новую

module.exports = {
    User,
    Basket,
    BasketCosmetic,
    Type,
    TypeBrand,
    Brand,
    Rating,
    CosmeticInfo,
    Cosmetic
}