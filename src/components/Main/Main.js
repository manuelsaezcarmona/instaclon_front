import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../Posts/PostCard';
import AddComment from '../AddComment/AddComment';
import { getPostsAll, startGetPostsAll } from '../../redux/actions/post';
import ModalDelete from '../ModalDelete/ModalDelete';

export function Main() {
  const { posts, filteredPosts, allPosts } = useSelector((store) => store.post);
  const { modalOpen, filter } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetPostsAll());
  }, []);

  useEffect(() => {
    if (filter) {
      dispatch(getPostsAll(filteredPosts));
    } else {
      dispatch(getPostsAll(allPosts));
    }
  }, [filter]);

  return (
    <div className="main-posts-container">
      {modalOpen === 'addModal' && <AddComment />}
      {modalOpen === 'deleteModal' && <ModalDelete />}
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
