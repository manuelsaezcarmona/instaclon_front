/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pathimg from '../../assets/empty.jpg';
import { useForm } from '../../hooks/userForm';

export function RegisterScreen() {
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    imageURL: '',
    username: '',
    fullname: '',
    email: '',
    password: '',
    password2: ''
  });

  const { imageURL, username, fullname, email, password, password2 } =
    formRegisterValues;

  // eslint-disable-next-line no-unused-vars
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files[0]);

      setPicture(e.target.files[0]);
      console.log(picture);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        console.log(reader.result);
        setImgData(reader.result);
      });
      // Read in the image file as a data URL.
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleClickPicture = () => {
    /** Necesito seleccionar un archivo y saber que archivo si eso cambiar */
    // Usando JS puro puedo seleccionar ese elemento este handle lanza un click
    // a ese elemento que es nuestro input de archivos
    document.querySelector('#file-selector-toimage').click();
  };

  return (
    <div className="register login__container">
      <div className="login__element">
        <h1 className="login__title logo">PhotoClon</h1>

        <form className="login__form">
          {imgData === null ? (
            <img
              className="formpost__image"
              src={pathimg}
              alt="imagen sin cargar"
              accept="image/png, .jpeg, .jpg, image/gif"
            />
          ) : (
            <img className="formpost__image" src={imgData} />
          )}

          <input
            id="file-selector-toimage"
            type="file"
            name="imageURL"
            value={imageURL}
            placeholder="sube una imagen"
            onChange={handleFileChange}
          />
          <button
            className="btn btn--accept"
            type="button"
            onClick={handleClickPicture}
          >
            Elegir foto
          </button>
          <input
            className="register inputText"
            type="text"
            name="username"
            value={username}
            placeholder="Pon tu nombre de usuario"
            autoComplete="off"
            onChange={handleRegisterInputChange}
          />
          <input
            className="register inputText"
            type="text"
            name="fullname"
            value={fullname}
            placeholder="Pon tu nombre de usuario"
            autoComplete="off"
            onChange={handleRegisterInputChange}
          />
          <input
            className="register inputText"
            type="text"
            name="email"
            value={email}
            placeholder="Introduce tu email"
            autoComplete="off"
            onChange={handleRegisterInputChange}
          />
          <input
            className="register inputText"
            type="password"
            name="password"
            value={password}
            placeholder="Introduce tu contraseña"
            autoComplete="off"
            onChange={handleRegisterInputChange}
          />
          <input
            className="register inputText"
            type="password"
            name="password2"
            value={password2}
            placeholder="Vuelve a introducir tu contraseña"
            autoComplete="off"
            onChange={handleRegisterInputChange}
          />
          <button className="btn btn--accept" type="submit">
            Regístrate
          </button>
        </form>
        <div className="login__remember">
          <p className="login__textremember">
            ¿Tienes una cuenta?{' '}
            <Link className="register login__link" to="/public/login">
              Entrar
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
