import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import FormPost from '../components/FormPost/FormPost';
// import FormComment from '../components/formcomment/FormComment';
import { Main } from '../components/Main/Main';

import { User } from '../components/User/User';

export function MainRoutes() {
  return (
    <>
      <NavBar />

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/post" element={<FormPost />} />
        </Routes>
      </div>
    </>
  );
}
