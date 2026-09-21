// src/services/api.js
import axios from 'axios';

const api = axios.create({
    // Adicionamos o '||' para garantir que ele aponta para o Back-end (porta 3000) 
    // caso o ficheiro .env não exista.
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Erro de comunicação com o Back-end:", error);
        return Promise.reject(error);
    }
);

export default api;