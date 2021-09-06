import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://www.freetogame.com/api',
})