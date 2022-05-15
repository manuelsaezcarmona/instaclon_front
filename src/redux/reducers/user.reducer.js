export { types } from '../actiontypes';

const initialState = {
  user: {
    id: 'unid',
    username: 'un nombre',
    email: 'email@manu.com',
    pasword: '123456',
    posts: [],
    comments: [],
    createdAt: 'Objeto Date',
    updatedAt: 'Objeto Date'
  },
  logged: true
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
