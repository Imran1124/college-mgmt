import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context';

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAppContext();

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
}
