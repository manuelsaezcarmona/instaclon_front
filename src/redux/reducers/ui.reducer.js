import { types } from '../actiontypes';

const initialState = {
  modalOpen: false,
  filter: false
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

    case types.uiSetFilter:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};
