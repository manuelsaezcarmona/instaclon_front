export { types } from '../actiontypes';

const initialState = {
  comments: [
    {
      id: 'unid',
      content: 'Un comentario',
      userIDcomment: 'ObjectID del usuario',
      postIDcomment: 'ObjectID del post',
      createdAt: '2022-05-12T07:28:47.329+00:00',
      updatedAt: '2022-05-13T10:31:18.226+00:00'
    }
  ]
};
export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
