import { types } from '../actiontypes';

export const uiOpenModal = (idmodal) => ({
  type: types.uiOpenModal,
  payload: idmodal
});

export const uiCloseModal = () => ({
  type: types.uiCloseModal,
  payload: false
});
