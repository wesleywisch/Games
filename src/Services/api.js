import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api',
})