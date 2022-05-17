import React from 'react';
import { user } from '../../services/sampledata';
import CommentList from '../commentlist/CommentList';
import Header from '../header/Header';
import PostList from '../postlist/PostList';

export function UserScreen() {
  return (
    <div className="user-container">
      <div className="user-info">
        <Header user={user} />
      </div>
      <CommentList user={user} />
      <PostList user={user} />
    </div>
  );
}
