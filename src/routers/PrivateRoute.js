import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { logged } = useSelector((state) => state.user);
  return logged ? children : <Navigate to="/public/login" />;
}
