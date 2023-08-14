/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, ApiList } from '../../../utils';
import { useAppContext } from '../../../context';

import {
  InputField,
  PasswordField,
  LoadingButton
} from '../../../components/forms';

export default function LoginForm() {
  const { api_loginSuperAdmin } = ApiList;
  const { login } = useAppContext();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string().required('User Name is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const response = await axiosInstance.post(api_loginSuperAdmin, {
          userName: values?.userName,
          password: values?.password
        });
        console.log(response);
        if (response?.data?.status) {
          login(response.data);
          navigate('/home');
          setSubmitting(false);
          toast.success('Login Success');
        } else {
          toast.error(response.data?.message);
          setSubmitting(false);
        }
      } catch (error) {
        toast.error(error?.message);
        setSubmitting(false);
      }
    }
  });

  const { handleSubmit, isSubmitting } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <section className="border-red-500 bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white p-5 flex rounded-2xl shadow-lg max-w-3xl">
            <div className="md:w-1/2 px-5 mt-12">
              <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
              <p className="text-sm mt-4 text-[#002D74]">
                If you have an account, please login
              </p>
              <div className="mt-6">
                <InputField
                  label="User Name"
                  name="userName"
                  formik={formik}
                  placeholder="Enter email"
                />
                <div className="mt-4">
                  <PasswordField
                    label="Password"
                    name="password"
                    formik={formik}
                    placeholder="Enter password"
                  />
                </div>
                <div className="text-right mt-2"></div>
                <LoadingButton
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full mt-6 hover:bg-blue-600 duration-300"
                >
                  Login
                </LoadingButton>
              </div>
            </div>
            <div className="w-1/2 md:block hidden ">
              <img
                src="/assets/schoolLogin.png"
                className="rounded-2xl"
                alt="page img"
              />
            </div>
          </div>
        </section>
      </Form>
    </FormikProvider>
  );
}
