export { types } from '../actiontypes';

const initialState = {
  comments: [
    {
      id: 'unid',
      content: 'Un comentario',
      userIDcomment: 'ObjectID del usuario',
      postIDcomment: 'ObjectID del post',
      createdAt: 'Objeto Date',
      updatedAt: 'Objeto Date'
    }
  ]
};
export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
