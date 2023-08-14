import axios from './axios';

const isValidToken = (token) => {
  if (!token) {
    return false;
  }
  return true;
};

// ---------------------------------------------------------------------

// ----------------------------------------------------------------------

const setSession = (token) => {
  if (token) {
    sessionStorage.setItem('auth_user', JSON.stringify(token));
    // console.log('result', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token?.token}`;
  } else {
    window.sessionStorage.removeItem('auth_user');
    delete axios.defaults.headers.common.Authorization;
  }
};
export { isValidToken, setSession };
