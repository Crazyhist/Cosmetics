import {makeAutoObservable} from "mobx";

export default class CosmeticStore {
    constructor() {
        this._types = [
            { id: 1, name: ' Помада'},
            { id: 2, name: 'Пудра'},
            { id: 3, name: 'Гели'},
            { id: 4, name: 'Скрабы'},
        ]
        this._brands = [
            { id: 1, name: 'Epica'},
            { id: 2, name: 'Bouticle'}
        ]
        this._cosmetics = [
            { id: 1, name: 'Nars', price: 10500, rating: 5,img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdoctor-veterinar.ru%2Fkoshki%2Fkot-ne-pisaet&psig=AOvVaw3tlbaAad4ksED04qy-OKbw&ust=1668239435329000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjl16nSpfsCFQAAAAAdAAAAABAJ'},
            { id: 2, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
            { id: 3, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
            { id: 4, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
            { id: 5, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
            { id: 6, name: 'Nars', price: 10500, rating: 5, img: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0&rlz=1C5CHFA_enRU968RU968&sxsrf=ALiCzsa3Uw1v_-pLn-p5jZwZzRfRwtVBwQ:1667550045098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj03tSAjJT7AhVBEncKHfm0C6UQ_AUoAXoECAIQAw#imgrc=CWFOXKB29NoSkM'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get cosmetic() {
        return this._cosmetics
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}