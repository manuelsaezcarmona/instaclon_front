export { types } from '../actiontypes';

const initialState = {
  posts: [
    {
      id: 'unid',
      imageURL: 'una direccion a la url',
      text: 'texto de la imagen',
      userID: 'ObjectID del usuario',
      comments: [],
      createdAt: 'Objeto Date',
      updatedAt: 'Objeto Date'
    }
  ]
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
