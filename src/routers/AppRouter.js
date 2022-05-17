import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/loginscreen';

import { RegisterScreen } from '../components/register/registerscreen';
import { MainRoutes } from './MainRoutes';
import PrivateRoute from './PrivateRoute';

import { PublicRoute } from './PublicRoute';

export default function AppRouter() {
  return (
    <div className="PhotoClonApp">
      <Router>
        <Routes>
          {/* <PublicRoute> */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterScreen />
              </PublicRoute>
            }
          />
          {/*  </PublicRoute> */}
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
