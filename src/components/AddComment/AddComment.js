/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiCloseModal } from '../../redux/actions/ui';

export default function AddComment() {
  const [content, setcontent] = useState('');

  const handleAddCommenttInputChange = (e) => {
    setcontent(e.target.value);
  };
  // const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleAddComment = () => {
    console.log('Añade comentario');
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
          onChange={handleAddCommenttInputChange}
        />
      </div>
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
  );
}
