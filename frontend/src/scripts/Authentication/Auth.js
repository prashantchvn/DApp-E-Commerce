import { Post } from "../apiClient";

export function loginCall(data){
    return Post('/api/login',data);
}

export function registerCall(data){
    return Post('/api/register',data);
}