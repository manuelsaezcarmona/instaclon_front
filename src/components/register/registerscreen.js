import React from 'react';
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

  return (
    <div className="register login__container">
      <div className="login__element">
        <h1 className="login__title logo">PhotoClon</h1>
        <form className="login__form">
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
            value={imageURL}
            placeholder="sube una imagen"
            onChange={handleRegisterInputChange}
          />
          <button className="btn btn--accept" type="button">
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
