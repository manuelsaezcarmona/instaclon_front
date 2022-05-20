import { useState } from 'react';

// formRegisterValues: Is a object with keys = values from form
// initialState is a object with same keys with formRegisterValues
// with all values set to false

export const useValidation = (initialState, formRegisterValues) => {
  const [formError, setFormError] = useState(initialState);

  const formFields = Object.entries(formRegisterValues);
  formFields.forEach((field) => {
    if (!field[1]) {
      field[1] = true;
    } else {
      field[1] = false;
    }
  });
  const objFields = Object.fromEntries(formFields);
  setFormError(objFields);
  return formError;
};
