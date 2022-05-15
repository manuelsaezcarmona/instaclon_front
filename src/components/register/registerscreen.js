import React from 'react';
import { Link } from 'react-router-dom';

export function RegisterScreen() {
  return (
    <div className="register login__container">
      <div className="login__element">
        <h1 className="login__title logo">PhotoClon</h1>
        <form className="login__form">
          <input
            className="register inputText"
            type="text"
            name="username"
            placeholder="Pon tu nombre de usuario"
            autoComplete="off"
          />
          <input
            className="register inputText"
            type="text"
            name="email"
            placeholder="Introduce tu email"
            autoComplete="off"
          />
          <input
            className="register inputText"
            type="password"
            name="password"
            placeholder="Introduce tu contraseña"
            autoComplete="off"
          />
          <input
            className="register inputText"
            type="password"
            name="password2"
            placeholder="Vuelve a introducir tu contraseña"
            autoComplete="off"
          />
          <button className="btn" type="submit">
            Regístrate
          </button>
        </form>
        <div className="login__remember">
          <p className="login__textremember">
            ¿Tienes una cuenta?{' '}
            <Link className="register login__link" to="/login">
              Entrar
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
