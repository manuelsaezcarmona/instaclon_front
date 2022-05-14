import React from 'react';
import { Link } from 'react-router-dom';

export function LoginScreen() {
  return (
    <div className="login__container">
      <div className="login__element">
        <h1 className="login__title logo">loginScreen</h1>
        <form className="login__form">
          <input
            type="text"
            name="email"
            placeholder="Introduce tu email"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Introduce tu contraseña"
            autoComplete="off"
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
        <div className="login__remember" />
        <p>
          ¿No tienes una cuenta?{' '}
          <Link className="login__link" to="/register">
            Registrate
          </Link>{' '}
        </p>
      </div>
    </div>
  );
}
