import axios from 'axios';
import { AuthState } from '../context/AuthContext';

const API_BASE_URL = 'https://auth-qa.qencode.com';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const doHealthCheck = async () => {
  try {
    const response = await apiClient.get('/healthcheck');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
}

export const getAccessToken = async () => {
  try {
    const response = await apiClient.post('/v1/auth/access-token', {access_id: "sergeycerb@gmail.com"});
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
}

export const login = async (email: string, password: string): Promise<AuthState> => {
  const health = await doHealthCheck();
  try {
    const response = await apiClient.post('/v1/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await apiClient.post('/v1/auth/password-reset', { email, redirect_url: `${API_BASE_URL}/password-set` });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
};

export const resetPassword = async (token: string, password: string, secret:string, password_confirm:string) => {
  try {
    const response = await apiClient.post('/v1/auth/password-set', {
      token,
      secret,
      password,
      password_confirm
      });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'An unknown error occurred' };
  }
};
