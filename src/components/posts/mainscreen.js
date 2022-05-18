import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from './PostCard';

import { startGetPostsAll } from '../../redux/actions/post';

export function MainScreen() {
  const { posts } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetPostsAll());
  }, []);

  return (
    <div className="main-posts-container">
      <ul className="posts__list">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
