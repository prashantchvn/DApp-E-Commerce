import { Post } from "../apiClient";

export function loginCall(data){
    return Post('/api/login',data);
}