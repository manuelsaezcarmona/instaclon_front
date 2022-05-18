import React from 'react';
import { Link } from 'react-router-dom';

export function LoginScreen() {
  return (
    <div className="login__container">
      <div className="login__element">
        <h1 className="login__title logo">PhotoClon</h1>
        <form className="login__form">
          <input
            className="login_input"
            type="text"
            name="email"
            placeholder="Introduce tu email"
            autoComplete="off"
          />
          <input
            className="login_input"
            type="password"
            name="password"
            placeholder="Introduce tu contraseña"
            autoComplete="off"
          />
          <button className="btn btn--accept" type="submit">
            Entrar
          </button>
        </form>
        <div className="login__remember">
          <p className="login__textremember">
            ¿No tienes una cuenta?{' '}
            <Link className="login__link" to="/public/register">
              Registrate
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
