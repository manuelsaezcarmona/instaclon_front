/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

export default function AddComment({ handleVisibility = () => {} }) {
  const [content, setcontent] = useState('');

  const handleAddCommenttInputChange = (e) => {
    setcontent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('despacha');
    // document.querySelector('#cancel-button').click();
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
        onClick={handleVisibility}
        onSubmit={handleSubmit}
      >
        Comenta!!
      </button>
      <button
        id="cancel-button"
        className="btn btn--cancel"
        onClick={handleVisibility}
      >
        Cancela
      </button>
    </div>
  );
}
