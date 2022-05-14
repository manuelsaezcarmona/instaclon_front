import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainScreen } from '../components/posts/mainscreen';
import { UserScreen } from '../components/user/userscreen';

export function MainRoutes() {
  return (
    <>
      <div>Barra Navegación</div>
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
