import axios from "axios";

// In dev we proxy '/api' to the API container via Vite
export const api = axios.create({
  baseURL: "/api",
});
