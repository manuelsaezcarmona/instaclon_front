import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../components/Login/Login';

import { Register } from '../components/Register/Register';

export default function PublicRoutes() {
  return (
    <div className="public-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
