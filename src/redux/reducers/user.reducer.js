export { types } from '../actiontypes';

const initialState = {
  user: {
    id: 'unid',
    username: 'un nombre',
    pasword: 'un password ¿necesario?',
    posts: [],
    comments: [],
    createdAt: 'Objeto Date',
    updatedAt: 'Objeto Date'
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
