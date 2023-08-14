import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.147:8001/api'
  // baseURL: 'http://203.129.217.62:5001/api'
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log('error', error.response.status);
      window.sessionStorage.removeItem('auth_user');
      delete axiosInstance.defaults.headers.common.Authorization;

      return (window.location.href = '/fee-mgmt/auth/login');
    }
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    );
  }
);

export default axiosInstance;
