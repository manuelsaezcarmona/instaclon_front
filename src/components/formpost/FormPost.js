import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import pathimg from '../../assets/empty.jpg';
import { useImgData } from '../../hooks/useImgData';
import { useForm } from '../../hooks/userForm';

export default function FormPost() {
  const [formAddPostValues, handleAddPostInputChange] = useForm({ text: '' });

  const { text } = formAddPostValues;

  const [formError, setFormError] = useState({ text: false });

  const errorEntries = Object.entries(formError).filter(
    (item) => item[1] === true
  );

  const navigate = useNavigate();

  const [imgFile, handleFileChange] = useImgData();

  const handleHome = () => {
    navigate('/');
  };

  const handleClickPicture = () => {
    document.querySelector('#file-selector-toimage').click();
  };

  const handleAddPostSubmit = (e) => {
    e.preventDefault();
    // Validacion de los elementos.
    const formFields = Object.entries(formAddPostValues);
    formFields.forEach((field) => {
      if (!field[1]) {
        field[1] = true;
      } else {
        field[1] = false;
      }
    });
    const objFields = Object.fromEntries(formFields);

    setFormError(objFields);

    if (errorEntries.length === 0) {
      if (imgFile !== null) {
        console.log('inicio Añadir post');
      }
    }
  };
  return (
    <div className="form-container">
      <div className="formpost__form">
        <header className="form__header">
          <h1 className="form__title">Postea tu foto</h1>
        </header>
        <div className="form-body">
          <div className="form-imageContainer">
            {imgFile === null ? (
              <img
                className="form__image"
                src={pathimg}
                alt="imagen sin cargar"
                accept="image/png, .jpeg, .jpg, image/gif"
              />
            ) : (
              <img className="form__image" alt="imagen a subir" src={imgFile} />
            )}
            <input
              form="addpost-form"
              id="file-selector-toimage"
              type="file"
              name="imageURL"
              placeholder="sube una imagen"
              onChange={handleFileChange}
            />
            <button
              form="addpost-form"
              className="btn btn--accept"
              type="button"
              onClick={handleClickPicture}
            >
              Elegir foto
            </button>
          </div>

          <form
            id="addpost-form"
            className="form-block"
            onSubmit={handleAddPostSubmit}
          >
            <textarea
              className="form-element  inputText"
              name="text"
              value={text}
              cols="40"
              rows="4"
              placeholder="Escribe tu post"
              onChange={handleAddPostInputChange}
            />
          </form>
        </div>

        <div className="form-footer">
          <button
            className="btn btn--cancel"
            type="button"
            onClick={handleHome}
          >
            Cancelar
          </button>
          <button form="addpost-form" className="btn btn--accept" type="submit">
            Publicar
          </button>
        </div>
        {errorEntries.length !== 0 && (
          <div className="errors">
            <p className="errors__title">
              Error de validacion para los siguientes campos:{' '}
            </p>
            {imgFile === null && (
              <p className="errors__item">
                Solo se puede postear con una imagen
              </p>
            )}
            <ul className="errors__list">
              {errorEntries.map((errorEntry) => (
                <li key={errorEntry} className="errors__item">
                  {errorEntry[0]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
