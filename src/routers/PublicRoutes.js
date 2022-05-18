import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/login/loginscreen';

import { RegisterScreen } from '../components/register/registerscreen';

export default function PublicRoutes() {
  return (
    <div className="public-container">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
}
