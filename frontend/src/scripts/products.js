import { Get, Post, Patch, Delete } from "../apiClient";

export function getProducts(){
    return Get('/api/products')
}

export function getProduct(slug){
    return Get(`/api/products/${slug}`)
}

export function createProduct(data){
    return Post('/api/products',data);
}

export function updateProduct(slug, data){
    return Patch(`/api/products/update/${slug}`,data);
}

export function deleteProduct(slug){
    return Delete(`/api/products/delete/${slug}`);
}