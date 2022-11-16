import {makeAutoObservable} from "mobx";

export default class CosmeticStore {
    constructor() {
        this._types = []
        this._brands = []
        this._cosmetics = []
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