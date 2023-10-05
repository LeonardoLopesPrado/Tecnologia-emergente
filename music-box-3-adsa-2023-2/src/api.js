import axios from "axios";

const api = axios.create({
  baseURL: "https://6514aa62dc3282a6a3cd618a.mockapi.io/musicas",
});

export default api;