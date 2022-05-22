import React from 'react';
import { MdOutlineAddComment, MdDeleteOutline } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import { uiOpenModal } from '../../redux/actions/ui';
import { setActivePost } from '../../redux/actions/post';

export function PostCard({ post }) {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleModalAddComment = () => {
    dispatch(setActivePost(post));
    dispatch(uiOpenModal('addModal'));
  };

  const handleModalDeletePost = () => {
    dispatch(setActivePost(post));
    dispatch(uiOpenModal('deleteModal'));
  };
  return (
    <article className="post-card">
      <header className="postcard__header">
        <Avatar user={post.userID} size="medium" />
        <p className="postcard__fullname">{post.userID.fullname}</p>
      </header>
      <div className="postcard__imagecontainer">
        <img className="postcard__image" src={post.imageURL} alt={post.text} />
        <div className="post-card__tool-bar">
          <MdOutlineAddComment onClick={handleModalAddComment} />
          {post.userID.username === user.username && (
            <MdDeleteOutline onClick={handleModalDeletePost} />
          )}
        </div>
      </div>
      <div className="postcard__textcontainer">
        <span className="postcard__usertext">{post.userID.username}</span>
        <p className="postcard__text">{post.text}</p>
      </div>
      <ul className="postcard__commentslist">
        {post.comments.map((comment) => (
          <li className="postcard__comment" key={comment.id}>
            <span className="postcard__commentuser">
              {comment.userIDcomment.username}
            </span>
            <p className="postcard_commenttext">{comment.content}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
