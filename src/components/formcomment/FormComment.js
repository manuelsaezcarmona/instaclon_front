import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

export default function FormComment() {
  return (
    <div className="formcomment__container">
      <form className="formcomment__form">
        <h2 className="formcomment__title">Añade un comentario</h2>
        <textarea
          className="formcomment__content"
          type="text"
          name="content"
          placeholder="Escribe tu comentario"
          cols="40"
          rows="4"
          autoComplete="off"
        />

        <div className="formcomment__footer">
          <p className="formcomment__footercontent">
            Posteado por Manu el 17 de mayo de 2022
          </p>
        </div>
        <div className="formcomment_close">
          <FaWindowClose />
        </div>
      </form>
    </div>
  );
}
