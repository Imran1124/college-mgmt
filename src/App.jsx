/* eslint-disable no-unused-vars */
import React from 'react';
import Router from './routes/routes';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="bg-white">
      <ToastContainer limit={1} autoClose={2000} />
      <Router />
    </div>
  );
}
