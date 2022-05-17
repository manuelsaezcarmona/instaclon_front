import React from 'react';

import pathimg from '../../assets/lauren-summer.jpg';

export default function FormPost() {
  return (
    <div className="formpost__container">
      <form className="formpost__form">
        <h1 className="formpost_title">Postea una foto</h1>
        <img
          className="formpost__image"
          src={pathimg}
          alt="imagen sin cargar"
          accept="image/png, .jpeg, .jpg, image/gif"
        />
        <input
          id="file-selector-toimage"
          type="file"
          name="imageURL"
          placeholder="sube una imagen"
        />
        <button className="btn btn--accept" type="button">
          Elegir foto
        </button>
        <textarea
          name="text"
          cols="40"
          rows="4"
          placeholder="Escribe tu post"
        />
        <div className="formpost__buttons">
          <button className="btn btn--cancel" type="button">
            Cancelar
          </button>
          <button className="btn btn--accept" type="submit">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}
