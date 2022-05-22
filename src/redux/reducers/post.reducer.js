import { types } from '../actiontypes';

const initialState = {
  posts: [
    /*  {
      id: 'unid',
      imageURL: 'https://i.ibb.co/dBd9Kzn/01-P-Cuchillas.jpg',
      text: 'texto de la imagen',
      userID: 'ObjectID del usuario',
      comments: [],
      createdAt: '2022-05-12T07:19:32.567+00:00',
      updatedAt: '2022-05-13T09:55:57.200+00:00'
    } */
  ],
  activePost: {}
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.postGetAll:
      return {
        ...state,
        posts: action.payload
      };
    case types.postAdd:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    case types.postSetActive: {
      return {
        ...state,
        activePost: action.payload
      };
    }
    case types.postUpdate: {
      return {
        ...state,
        // eslint-disable-next-line no-confusing-arrow
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        )
      };
    }
    case types.postDelete: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      };
    }

    default:
      return state;
  }
};
