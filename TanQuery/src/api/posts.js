import axios from "axios";

export const fetchPosts =  async() => {
    const response = await axios.get("https://6891f3d2447ff4f11fbe7c0d.mockapi.io/users");
    return response.data; //retorna os dados da requisição
}