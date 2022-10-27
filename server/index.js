require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express() // с него начинается запуск нашего приложения
app.use(cors())
app.use(express.json()) //чтобы могли парсить в json формат
app.use(express.static(path.resolve(__dirname, 'static'))) // явно указываем серверу что файлы из папки статик необходимо раздавать как статику, чтобы получать их
app.use(fileUpload({})) // для загрузки картинок товаров (пустой объект)
app.use('/api', router)

//замыкающий мидлвер, внутри него не вызвали функции некст, на нем работа завершается
app.use(errorHandler)

// app.get('/', (req,res) => {
//     res.status(200).json({message: 'WORKING!!!'})
// })
// проеверка подключения к серверу

const start = async () => { // все операции в бд - асинхроы
    try {
        await sequelize.authenticate() //подключение к БД
        await sequelize.sync() //сверка состотяние БД с схемой данной
        app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()