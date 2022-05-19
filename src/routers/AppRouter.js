import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainRoutes } from './MainRoutes';
import PrivateRoute from './PrivateRoute';

import { PublicRoute } from './PublicRoute';
import PublicRoutes from './PublicRoutes';

export default function AppRouter() {
  // TODO  <div className="spinner">Loading...</div>;
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
