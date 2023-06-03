import { Get, Post, Patch, Delete } from "./apiClient";

export function placeOrder(){
    return Post('/api/orders');
}

export function getOrders(){
    return Get('/api/orders')
}

export function getBalance(){
    return Get('/api/orders/get/balance')
}