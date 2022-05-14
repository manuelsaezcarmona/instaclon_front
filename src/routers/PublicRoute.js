import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PublicRoute({ children }) {
  const { logged } = useSelector((state) => state.user);
  return logged ? <Navigate to="/" /> : children;
}
