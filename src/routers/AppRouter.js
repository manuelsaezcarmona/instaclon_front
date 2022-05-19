import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { startCheckUser } from '../redux/actions/user';

import { MainRoutes } from './MainRoutes';
import PrivateRoute from './PrivateRoute';

import { PublicRoute } from './PublicRoute';
import PublicRoutes from './PublicRoutes';

export default function AppRouter() {
  const { logged } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCheckUser());
  }, [dispatch]);

  if (logged === null) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="PhotoClonApp">
      <Router>
        <Routes>
          <Route
            path="/public/*"
            element={
              <PublicRoute>
                <PublicRoutes />
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <MainRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
