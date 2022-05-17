import React from 'react';

import pathimg from '../../assets/empty.jpg';

export default function FormPost() {
  return (
    <div className="formpost__container">
      <form className="formpost__form">
        <img
          src={pathimg}
          alt="imagen sin cargar"
          accept="image/png, .jpeg, .jpg, image/gif"
        />
        <input id="file-selector" type="file" name="imageURL" />
        <textarea
          name="text"
          cols="40"
          rows="4"
          placeholder="Escribe tu post"
        />
        <button className="btn btn--cancel" type="submit">
          Cancelar
        </button>
        <button className="btn btn--accept" type="submit">
          Publicar
        </button>
      </form>
    </div>
  );
}
