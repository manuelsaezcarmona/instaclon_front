import React from 'react';
import { user } from '../../services/sampledata';
import Header from '../header/Header';
import PostList from '../postlist/PostList';

export function UserScreen() {
  return (
    <div className="user-container">
      <div className="user-info">
        <Header user={user} />
        <PostList user={user} />
      </div>
    </div>
  );
}
