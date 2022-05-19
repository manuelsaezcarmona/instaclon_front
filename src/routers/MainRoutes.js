import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/common/NavBar';
import FormPost from '../components/formpost/FormPost';
// import FormComment from '../components/formcomment/FormComment';
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
          <Route path="/post" element={<FormPost />} />
        </Routes>
      </div>
    </>
  );
}
