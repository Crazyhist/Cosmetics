import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true // false - обычный юзер, фиксить надо
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth (bool) {
        this._isAuth = bool
    }
    setUser (user) {
        this._isAuth = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}