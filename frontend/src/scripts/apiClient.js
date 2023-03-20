import axios from 'axios';

const baseURL = `http://localhost:5000`

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export function Post(url, data) {
  return axios.post(baseURL + url, data, headers)
}

export function Get(url, data) {
  return axios.get(baseURL + url, {}, headers)
}

export function Delete(url, data) {
  return axios.delete(baseURL + url, {}, headers)
}

export function Patch(url, data) {
  return axios.patch(baseURL + url, {}, headers)
}