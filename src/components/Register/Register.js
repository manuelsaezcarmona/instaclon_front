/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import pathimg from '../../assets/empty.jpg';
import { FORM_INITIAL_STATE } from '../../constants';
import { useImgData } from '../../hooks/useImgData';
// import { uploadFileToCloud } from '../../helpers/uploadfile';
import { useForm } from '../../hooks/userForm';

// import { startRegister } from '../../redux/actions/user';

export function Register() {
  //  const dispatch = useDispatch();
  const [formRegisterValues, handleRegisterInputChange] =
    useForm(FORM_INITIAL_STATE);

  // eslint-disable-next-line no-unused-vars
  const [formError, setFormError] = useState({
    username: false,
    fullname: false,
    email: false,
    password: false,
    password2: false
  });

  const { username, fullname, email, password, password2 } = formRegisterValues;

  const [imgFile, handleFileChange] = useImgData();

  const handleClickPicture = () => {
    document.querySelector('#file-selector-toimage').click();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Validacion de los elementos.
    // con un if de todos los elementos , si seterror >0 => dispatch : mensaje de error
    // eslint-disable-next-line no-unused-vars
    const formFields = Object.entries(formRegisterValues);
    formFields.forEach((field) => {
      if (!field[1]) {
        field[1] = true;
      } else {
        field[1] = false;
      }
    });

    const objFields = Object.fromEntries(formFields);

    console.log(formFields);

    console.log(objFields);

    setFormError(objFields);
    /*  if (!username) {
      setFormError((prevFormErrorState) => ({
        ...prevFormErrorState,
        username: true
      }));
    } */

    /* startRegister(username, fullname, imgFile, email, password).then(console.log)
    => navigate login */
    // si vengo de la ruta de register
    // router.push(path de login);
  };
  const errorEntries = Object.entries(formError).filter((item) => item[1]);
  return (
    <div className="register login__container">
      <div className="login__element">
        <h1 className="login__title logo">PhotoClon</h1>

        <form className="login__form" onSubmit={handleRegisterSubmit}>
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
            id="file-selector-toimage"
            type="file"
            name="imageURL"
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

        {errorEntries.length !== 0 && (
          <div>
            <p>Error de validacion para los siguientes campos: </p>
            <ul>
              {errorEntries.map((errorEntry, index) => (
                <li key={index}>{errorEntry[0]}</li>
              ))}
            </ul>
          </div>
        )}

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
