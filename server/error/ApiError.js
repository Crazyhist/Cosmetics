class ApiError extends Error{
    constructor(status, message) {
        super(); //родительский конструктор в дочернем
        this.status = status
        this.message = message
    }

    // статические функции можно вызывать без создание объекта, можем обращаться напрямую к классу и вызывать функции
    static badRequest (message) {
        return new ApiError (404, message)
    }
    static internal (message) {
        return new ApiError (500, message)
    }
    static forbidden (message) {
        return new ApiError (403, message)
    }
}

module.exports = ApiError