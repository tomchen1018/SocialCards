import axios from "axios";

export const requestGet = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}