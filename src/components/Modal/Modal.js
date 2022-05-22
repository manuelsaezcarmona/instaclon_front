import React from 'react';

export default function Modal({
  typeButtons = 'Accept',
  message = 'Texto por default'
}) {
  return (
    <div className="modal">
      <div className="modal__content">
        <p className="modal__text">{message}</p>
        <div className="modal__buttons">
          <button className="btn btn--accept" type="button">
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
}
