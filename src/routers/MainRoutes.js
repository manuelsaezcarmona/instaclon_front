import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/common/NavBar';

import { MainScreen } from '../components/posts/mainscreen';
import { UserScreen } from '../components/user/userscreen';

export function MainRoutes() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/user" element={<UserScreen />} />
          {/** TODO ruta dinamica a SinglePost Screen */}
        </Routes>
      </div>
    </>
  );
}
