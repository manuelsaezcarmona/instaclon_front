import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/loginscreen';
import { MainScreen } from '../components/posts/mainscreen';
import { RegisterScreen } from '../components/register/registerscreen';
import { UserScreen } from '../components/user/userscreen';

export default function AppRouter() {
  return (
    <div>
      <h1>AppRouter</h1>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<MainScreen />} />
          <Route path="/user" element={<UserScreen />} />
        </Routes>
      </Router>
    </div>
  );
}
