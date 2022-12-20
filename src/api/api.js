import axios from "axios";

const BASE_URL = null;

export const api = axios.create({
  baseURL: BASE_URL || 3000,
  timeout: 50000,
});
