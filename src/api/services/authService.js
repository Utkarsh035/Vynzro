import api from '../axiosConfig';
import ENDPOINTS from '../endpoints';

/**
 * Auth service — ready for Spring Boot JWT authentication.
 */
export const login = async (credentials) => {
  const response = await api.post(ENDPOINTS.AUTH_LOGIN, credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post(ENDPOINTS.AUTH_REGISTER, userData);
  return response.data;
};

export const logout = async () => {
  await api.post(ENDPOINTS.AUTH_LOGOUT);
};

export const isAuthenticated = async () => {
  try {
    await api.get(ENDPOINTS.AUTH_SESSION);
    return true;
  } catch {
    return false;
  }
};
