import { types } from '../actiontypes';

const initialState = {
  modalOpen: false
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: action.payload
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: action.payload
      };

    default:
      return state;
  }
};
