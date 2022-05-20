import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../components/Login/Login';

import { RegisterScreen } from '../components/Register/registerscreen';

export default function PublicRoutes() {
  return (
    <div className="public-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
}
