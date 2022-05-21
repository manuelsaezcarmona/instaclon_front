/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable func-names */
/* eslint-disable dot-notation */
import React from 'react';
import Button from './Button/Button';

import styles from './Modal.module.scss';

export default function ({ handleVisibility = () => {} }) {
  return (
    <div className={styles['modal__container']}>
      <div className={styles['modal__content']}>This is a modal</div>
      <Button
        label="Close the modal!"
        role="danger"
        handleClick={handleVisibility}
      />
    </div>
  );
}
