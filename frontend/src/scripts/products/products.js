import { Get } from "../apiClient";

export function getProducts(){
    return Get('/api/products')
}

export function getProduct(slug){
    return Get(`/api/products/${slug}`)
}