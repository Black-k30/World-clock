import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContect';

const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth(); // Example hook from AuthContext

  return (
    <Route
      {...rest}
      element={currentUser ? element : <Navigate to="/signin" replace />}
    />
  );
};

export default PrivateRoute;
