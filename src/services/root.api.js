import axios from "axios";
import { API_PATH } from "constants/common";

const instance = axios.create({ baseURL: API_PATH });
const storage = localStorage.getItem("storageTyp");

export const token = window[storage]?.getItem("jwt")
  ? `Bearer ${window[storage].getItem("jwt")}`
  : "";

instance.defaults.headers.common["Authorization"] = token;

export default instance;
