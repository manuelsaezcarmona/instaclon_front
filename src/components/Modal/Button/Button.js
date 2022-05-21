/* eslint-disable func-names */
/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Button.module.scss';

export default function ({ label, role = 'primary', handleClick = () => {} }) {
  const roleClassName = styles[`button--${role}`];
  const buttonClassName = `${styles.button} ${roleClassName}`;

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {label}
    </button>
  );
}
