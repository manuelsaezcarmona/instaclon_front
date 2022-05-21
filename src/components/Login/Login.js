/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
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

  const [formError, setFormError] = useState({
    email: false,
    password: false
  });

  const errorEntries = Object.entries(formError).filter(
    (item) => item[1] === true
  );

  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.entries(formLoginValues);
    formFields.forEach((field) => {
      if (!field[1]) {
        field[1] = true;
      } else {
        field[1] = false;
      }
    });

    const objFields = Object.fromEntries(formFields);
    setFormError(objFields);
    console.log(errorEntries);
    if (!errorEntries || errorEntries.length === 0) {
      dispatch(startLogin(email, password));
    }
  };

  return (
    <div className="form-container">
      <header className="form__header">
        <h1 className="form__title logo">PhotoClon</h1>
      </header>
      <div className="form-body">
        <form className="form-block" onSubmit={handleLoginSubmit}>
          <input
            className="form-element inputText"
            type="text"
            name="email"
            placeholder="Introduce tu email"
            value={email}
            autoComplete="off"
            onChange={handleLoginInputChange}
          />
          <input
            className="form-element inputText"
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

        {errorEntries.length !== 0 && (
          <div className="errors">
            <p className="errors__title">
              Error de validacion para los siguientes campos:{' '}
            </p>
            <ul className="errors__list">
              {errorEntries.map((errorEntry, index) => (
                <li key={`${index}_err`} className="errors__item">
                  {errorEntry[0]}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="form__textremember">
          ¿No tienes una cuenta?{' '}
          <Link className="text__link" to="/public/register">
            Registrate
          </Link>{' '}
        </p>
      </div>
    </div>
  );
}
