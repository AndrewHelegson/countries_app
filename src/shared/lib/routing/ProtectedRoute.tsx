import React from 'react';
import { useUnit } from 'effector-react';
import { Navigate, useLocation } from 'react-router-dom';
import { $isAuthenticated } from '../../../entities/session/model';

export const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const isAuth = useUnit($isAuthenticated);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};
