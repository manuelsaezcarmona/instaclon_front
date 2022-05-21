import React from 'react';

export default function AddComment({ handleVisibility = () => {} }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <p className="modal__text">Añadiendo comentarios</p>
      </div>
      <button className="btn btn--accept" type="button">
        Comenta!!
      </button>
      <button
        className="btn .btn--cancel"
        type="button"
        handleClick={handleVisibility}
      >
        Cancela
      </button>
    </div>
  );
}
