import axios from 'axios';

const baseURL = `http://localhost:5000`

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

export function Post(url,data){
    return axios.post(baseURL+url,data,headers)
}