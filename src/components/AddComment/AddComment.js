/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentToPost } from '../../redux/actions/post';
import { uiCloseModal } from '../../redux/actions/ui';
import { addCommentToUser } from '../../redux/actions/user';

export default function AddComment() {
  const [content, setcontent] = useState('');
  const { activePost } = useSelector((state) => state.post);

  const handleAddCommentInputChange = (e) => {
    setcontent(e.target.value);
  };

  const dispatch = useDispatch();

  const handleAddComment = async () => {
    const comment = await dispatch(addCommentToPost(content, activePost));
    dispatch(addCommentToUser(comment));
    dispatch(uiCloseModal());
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <p className="modal__text">Añadiendo comentarios</p>
        <input
          type="text"
          className="form-element "
          name="content"
          value={content}
          placeholder="Escribe tu post"
          onChange={handleAddCommentInputChange}
        />
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--accept"
          type="button"
          onClick={handleAddComment}
        >
          Comenta!!
        </button>
        <button
          id="cancel-button"
          className="btn btn--cancel"
          onClick={() => dispatch(uiCloseModal())}
        >
          Cancela
        </button>
      </div>
    </div>
  );
}
