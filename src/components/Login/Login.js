import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/userForm';
import { startLogin } from '../../redux/actions/user';

export function Login() {
  const [formLoginValues, handleLoginInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formLoginValues;

  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  return (
    <div className="login__container">
      <div className="login__element">
        <h1 className="login__title logo">PhotoClon</h1>
        <form className="login__form" onSubmit={handleLoginSubmit}>
          <input
            className="login_input"
            type="text"
            name="email"
            placeholder="Introduce tu email"
            value={email}
            autoComplete="off"
            onChange={handleLoginInputChange}
          />
          <input
            className="login_input"
            type="password"
            name="password"
            value={password}
            placeholder="Introduce tu contraseña"
            autoComplete="off"
            onChange={handleLoginInputChange}
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
