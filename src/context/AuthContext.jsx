/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { axiosInstance, isValidToken, setSession, ApiList } from '../utils';

const AuthContext = () => {
  const { api_logoutSuperAdmin } = ApiList;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [user, setUser] = useState(null);

  const initialize = useCallback(async () => {
    try {
      // const accessToken = localStorage.getItem('token');
      const value = JSON.parse(sessionStorage.getItem('auth_user'));
      if (value?.token != null) {
        console.log('tokenValue', value?.token);
        setSession(value);
        const response = await axiosInstance.post(`/users/profile`, {
          id: value?.id
        });
        console.log('response', response);
        if (response?.data?.status) {
          setIsAuthenticated(true);
          setIsInitialized(true);
          setUser(response?.data?.data);
        }
        // } else {
        //   setIsAuthenticated(false);
        //   setIsInitialized(true);
        //   setUser(null);
        // }

        setIsAuthenticated(true);
        setIsInitialized(true);
        setUser(response?.data?.data);
      } else {
        setIsAuthenticated(false);
        setIsInitialized(true);
        setUser(null);
      }
    } catch (error) {
      console.log('error', error);
      // setIsAuthenticated(false);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize, isAuthenticated]);

  // // LOGIN
  const login = async (response) => {
    try {
      const result = response.data;
      setSession(result);
      setUser(result);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  // // REGISTER
  // const register = async (email, password, firstName, lastName) => {
  //   const response = await axios.post('/api/account/register', {
  //     email,
  //     password,
  //     firstName,
  //     lastName
  //   });
  //   const { accessToken, user } = response.data;
  //   localStorage.setItem('accessToken', accessToken);
  //   setUser(user);
  //   setIsAuthenticated(true);
  // };

  // LOGOUT
  // const logout = async () => {
  //   setSession(null);
  //   setIsAuthenticated(false);
  //   setUser(null);
  // };

  const logout = async () => {
    const value = JSON.parse(sessionStorage.getItem('auth_user'));
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to logout?',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'No, cancel!'
    }).then(async (result) => {
      if (result.value) {
        try {
          const response = await axiosInstance.post(api_logoutSuperAdmin, {
            userName: value?.userName,
            token: value?.token
          });
          console.log(response);
          if (response?.data?.status) {
            setSession(null);
            setIsAuthenticated(false);
            setUser(null);
            // navigate('/auth/login');
            toast.success('Logout Success');
          }
        } catch (error) {
          console.log(error);
          // setSession(null);
          // setIsAuthenticated(false);
          // setUser(null);
          toast.error('Logout Failed');
        }
      }
    });
  };

  return {
    isAuthenticated,
    isInitialized,
    user,
    login,
    logout
  };
};

export default AuthContext;
