import { Get, Post, Patch, Delete } from "./apiClient";

export function getProducts(){
    return Get('/api/products')
}

export function getProduct(slug){
    return Get(`/api/products/${slug}`)
}

export function exploreGender(gender){
    return Get(`/api/products/explore/${gender}`);
}

export function exploreCategory(gender,category){
    return Get(`/api/products/explore/${gender}/${category}`);
}
