import { Get } from "../apiClient";

export function getProducts(){
    return Get('/api/products')
}