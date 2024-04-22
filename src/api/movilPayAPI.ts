import axios from "axios";
import { ErrorToast } from "../hooks/Notifications";

export const movilPayAPI = axios.create({
  baseURL: "https://validator.movilpay.app",
});

movilPayAPI.interceptors.request.use((config) => {
  // Modificar la configuración de la solicitud antes de enviarla
  // Puedes agregar encabezados, tokens, etc.
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = token;
  return config;
});

movilPayAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    
    
    // Manejar errores de respuesta
    if (error.response.status == 500) {
      ErrorToast("Server Internal Error (500)");
    }
    if (error.request.status == 0) {
      ErrorToast("Error de conexion, intente nuevamente");
    }
    if (error.response.status == 401) {
      localStorage.clear();
      window.location.href = "/auth/";
      return;
    }
    return Promise.reject(error);
  }
);
