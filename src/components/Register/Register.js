/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import pathimg from '../../assets/empty.jpg';
import { REGISTER_FORM_INITIAL_STATE } from '../../constants';
import { useImgData } from '../../hooks/useImgData';
import { useForm } from '../../hooks/userForm';

import { startRegister } from '../../redux/actions/user';

export function Register() {
  //  const dispatch = useDispatch();
  const [formRegisterValues, handleRegisterInputChange] = useForm(
    REGISTER_FORM_INITIAL_STATE
  );

  const navigate = useNavigate();

  const { username, fullname, email, password, password2 } = formRegisterValues;

  const [formError, setFormError] = useState({
    username: false,
    fullname: false,
    email: false,
    password: false,
    password2: false
  });

  const errorEntries = Object.entries(formError).filter(
    (item) => item[1] === true
  );
  console.log(errorEntries);

  const [imgFile, handleFileChange] = useImgData();

  const handleClickPicture = () => {
    document.querySelector('#file-selector-toimage').click();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Validacion de los elementos.
    const formFields = Object.entries(formRegisterValues);
    formFields.forEach((field) => {
      if (!field[1]) {
        field[1] = true;
      } else {
        field[1] = false;
      }
    });

    const objFields = Object.fromEntries(formFields);
    // console.log(objFields);
    setFormError(objFields);

    // Mirar con Ja porque peta la validacion (errorEntries.length === 0 && imgFile !== null)
    if (errorEntries.length === 0) {
      if (imgFile !== null) {
        console.log('Registrandome');
        const registro = startRegister(
          username,
          fullname,
          imgFile,
          email,
          password
        );
        console.log(registro);
        navigate('/login');
      }
    }
  };

  return (
    <div className="login__element">
      <header className="login__header">
        <h1 className="login__title logo">PhotoClon</h1>
      </header>
      <div className="login-body">
        <div className="login-body__imageContainer">
          {imgFile === null ? (
            <img
              className="formpost__image"
              src={pathimg}
              alt="imagen sin cargar"
              accept="image/png, .jpeg, .jpg, image/gif"
            />
          ) : (
            <img className="formpost__image" src={imgFile} />
          )}
          <input
            form="login-form"
            id="file-selector-toimage"
            type="file"
            name="imageURL"
            placeholder="sube una imagen"
            onChange={handleFileChange}
          />
          <button
            form="login-form"
            className="btn btn--accept"
            type="button"
            onClick={handleClickPicture}
          >
            Elegir foto
          </button>
        </div>

        <form
          id="login-form"
          className="login__form"
          onSubmit={handleRegisterSubmit}
        >
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
            placeholder="Pon tu nombre Completo"
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
      </div>

      <div className="footerform">
        {errorEntries.length !== 0 && (
          <div className="footerform__errors">
            <p>Error de validacion para los siguientes campos: </p>
            {imgFile === null && (
              <p className="footerform__erroritem">
                Recuerda subir tu foto de avatar
              </p>
            )}
            <ul className="footerform__errorlist">
              {errorEntries.map((errorEntry, index) => (
                <li key={index} className="footerform__erroritem">
                  {errorEntry[0]}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="login__textremember">
          ¿Tienes una cuenta?{' '}
          <Link className="login__link" to="/public/login">
            Entrar
          </Link>{' '}
        </p>
      </div>
    </div>
  );
}
