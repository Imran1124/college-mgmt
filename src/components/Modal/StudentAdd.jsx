/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CommonModal from './index';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ApiList, axiosInstance } from '../../utils';
import { useNavigate } from 'react-router-dom';

export default function StudentAdd(props) {
  const { api_csvadd } = ApiList;
  const navigate = useNavigate();
  const { isOpen, toggle } = props;
  const [erroState, seterroState] = useState(false);
  const [erroMessage, seterroMessage] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const initialValues = {
    uploadCSV: ''
  };
  const validationSchema = yup.object({
    uploadCSV: yup.string().required('Upload CSV File')
  });
  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('uploadCSV', values.uploadCSV);
      saveMasterForm(formData);
    },
    validationSchema
  });
  const saveMasterForm = async (formData) => {
    try {
      const response = await axiosInstance.post(`${api_csvadd}`, formData);
      if (response.status == 200) {
        navigate('/csms/student/view');
        // setSubmitting(false);
      }
    } catch (error) {
      console.log(error);
      // setSubmitting(false);
    }
  };
  const handleChange = (e) => {
    // let name=e.target.value;
  };
  return (
    <>
      <CommonModal isOpen={isOpen}>
        <div
          toggle={toggle}
          className=" flex justify-between w-full px-64 py-[20px] text-[2.5vh] font-bold bg-[#115e59] text-white "
        >
          <h1 className="w-full flex items-center justify-center">
            Add Student CSV
          </h1>
        </div>
        <div className="flex items-center  justify-center overflow-hidden bg-white  h-auto max-[606px]:h-[35vh]">
          <div className="block w-full m-[20px] max[784px]:m-[10]">
            <form
              className="flex flex-col justify-center"
              onSubmit={formik.handleSubmit}
              onChange={handleChange}
            >
              <div className="w-full h-auto bg-white ">
                <div className="m-3 block">
                  <div className="flex justify-center max-[425px]:block">
                    <div className=" items-center justify-center block">
                      <label
                        htmlFor="uploadCSV"
                        className=" h-[5vh] w-full flex justify-center border border-[#115e59] items-center px-4    rounded-l font-semibold cursor-pointer text-sm text-black tracking-widest  active:bg-white focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition "
                      >
                        {' '}
                        Choose Student CSV File
                      </label>
                      <input
                        type="file"
                        name="uploadCSV"
                        accept=".csv"
                        id="uploadCSV"
                        className="sr-only  "
                        value={formik.values.uploadCSV[0]}
                        onChange={(e) => {
                          formik.setFieldValue('uploadCSV', e.target.files[0]);
                        }}
                      />
                      <span className="w-full flex items-center justify-center">
                        {' '}
                        {formik.values.uploadCSV
                          ? formik.values.uploadCSV?.name
                          : 'No file selected'}
                      </span>
                      <br />
                      <span className="text-red-600 text-xs ">
                        {formik.touched.uploadCSV && formik.errors.uploadCSV
                          ? formik.errors.uploadCSV
                          : null}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-[8vh] flex items-center justify-center max-[768px]:block mb-5 max-[768px]:ml-5">
                <button
                  type="submit"
                  className="text-[2vh] bg-[#115e59] text-white border border-[#115e59]  py-[7px] px-[20px] rounded-[5px] m-[20px] hover:text-[#115e59] hover:border-[#115e59] hover:bg-white"
                >
                  Upload
                </button>
                <button
                  onClick={() => {
                    toggle();
                  }}
                  type="cancel"
                  className="text-[2vh] border-red-600 border text-white bg-red-600 px-[20px] py-[7px]  rounded-[5px] hover:border-red-600 hover:bg-white hover:text-red-600"
                >
                  Cancel
                </button>
              </div>
              <div className="mb-5 w-full flex justify-center items-center max-[350px]:items-end max-[350px]:mt-12">
                <h1 className="text-gray-500">
                  Note : (<span className="text-red-600">*</span>) marks is
                  mandatory.
                </h1>
              </div>
            </form>
          </div>
        </div>
      </CommonModal>
    </>
  );
}
