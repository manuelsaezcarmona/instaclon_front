import React from 'react';
import { useSelector } from 'react-redux';

import CommentList from '../commentlist/CommentList';
import Header from '../header/Header';
import PostList from '../postlist/PostList';

export function UserScreen() {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="user-container">
      <div className="user-info">
        <Header user={user} />
      </div>
      <div className="user-comments">
        <h3 className="user-comments_title">Comentarios</h3>
        <CommentList user={user} />
      </div>

      <div className="user-posts">
        <h3 className="user-posts_title">Publicaciones</h3>
        <PostList user={user} />
      </div>
    </div>
  );
}
