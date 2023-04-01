import { Get, Post } from "../apiClient";

export function placeOrder(){
    return Post('/api/orders');
}

export function getOrders(){
    return Get('/api/orders')
}