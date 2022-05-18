// import { types } from '../actiontypes';

const initialState = {
  user: {
    id: 'unid78954',
    username: 'Manu',
    fullname: 'Manuel Saez',
    avatarURL: 'https://avatars.githubusercontent.com/u/70754764?v=4',
    email: 'email@manu.com',
    pasword: '123456',
    posts: [],
    comments: [],
    createdAt: '2022-05-12T07:15:59.655+00:00',
    updatedAt: '2022-05-12T07:28:47.443+00:00'
  },
  logged: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
