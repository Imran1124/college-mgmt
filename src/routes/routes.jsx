/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import DashboardLayout from '../layout/dashboardLayout/Layout';
import LoaderLine from '../components/loader/LoderLine';
import { AuthGuard, GuestGuard } from '../guard';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoaderLine />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          )
        }
      ]
    },

    // Dashboard Routes
    {
      path: '/',
      element: <Navigate to="/home" replace />,
      index: true
    },
    {
      path: '/',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/" replace />, index: true },
        { path: 'home', element: <HomePage /> }
      ]
    },

    // Main Routes
    {
      path: '/',
      // element: <MainLayout />,
      children: [
        { path: 'main', element: <MainPage /> }
        // { path: 'privacy-policy', element: <PrivacyPolicy /> },
      ]
    },
    {
      path: '*',
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// 404 not found page routes
const Page404 = Loadable(lazy(() => import('../pages/404')));

// login page routes
const LoginPage = Loadable(lazy(() => import('../pages/auth/login')));

const HomePage = Loadable(lazy(() => import('../pages/college-mgmt/home')));
const MainPage = Loadable(lazy(() => import('../pages/main')));
