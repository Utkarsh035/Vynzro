import axios from 'axios';

/**
 * Axios instance configured for Spring Boot backend.
 * Base URL is read from environment variable VITE_API_BASE_URL.
 */
const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL;
const baseURL = configuredBaseUrl || (import.meta.env.DEV ? 'http://localhost:8080/api' : undefined);

const api = axios.create({
  baseURL,
  timeout: 15000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* ---- Response Interceptor ---- */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.warn('[Vynzro API] Unauthorized request.');
      }
    } else if (error.request) {
      console.warn('[Vynzro API] No response — backend may be offline. Using static data.');
    }
    return Promise.reject(error);
  }
);

export default api;
