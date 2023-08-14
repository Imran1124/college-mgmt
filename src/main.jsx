/* eslint-disable no-undef */
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackError from './components/Error';
import App from './App';
import './index.css';
import ContextProviders from './context';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const myErrorHandler = (error, info) => {
  console.log('logger', error, info);
};

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ErrorBoundary FallbackComponent={FallbackError} onError={myErrorHandler}>
    <BrowserRouter basename="college-mgmt">
      <ContextProviders>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </HelmetProvider>
      </ContextProviders>
    </BrowserRouter>
  </ErrorBoundary>
  // </React.StrictMode>
);
