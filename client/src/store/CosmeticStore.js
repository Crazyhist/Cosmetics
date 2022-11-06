import {makeAutoObservable} from "mobx";

export default class CosmeticStore {
    constructor() {
        this._types = [
            { id: 1, name: 'pomade'},
            { id: 2, name: 'powder'}
        ]
        this._brands = [
            { id: 1, name: 'Epica'},
            { id: 2, name: 'Bouticle'}
        ]
        this._cosmetics = [
            { id: 1, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
            { id: 2, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
            { id: 3, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
            { id: 4, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
        ]
        makeAutoObservable(this)
    }

    setTypes (types) {
        this._types = types
    }
    setBrands (brands) {
        this._brands = brands
    }
    setCosmetics (cosmetics) {
        this._cosmetics = cosmetics
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get cosmetic() {
        return this._cosmetic
    }
}