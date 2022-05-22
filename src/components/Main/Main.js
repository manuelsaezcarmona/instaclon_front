import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from '../Posts/PostCard';

import { startGetPostsAll } from '../../redux/actions/post';

export function Main() {
  const { posts } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetPostsAll());
  }, []);

  return (
    <div className="main-posts-container">
      <ul className="posts__list">
        {posts.map((post) => (
          <li key={`postid-${post.id}`}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
