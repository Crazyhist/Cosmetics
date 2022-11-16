import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createCosmetic = async (cosmetic) => {
    const {data} = await $authHost.post('api/cosmetic', cosmetic)
    return data
}

export const fetchCosmetics = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/cosmetic', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneCosmetic = async (id) => {
    const {data} = await $host.get('api/cosmetic/' + id)
    return data
}