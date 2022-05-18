import { getPosts } from '../../services/post.services';
import { types } from '../actiontypes';

export const getPostsAll = (posts) => ({
  type: types.postGetAll,
  payload: posts
});

export const startGetPostsAll = () => async (dispatch) => {
  try {
    const result = await getPosts();
    if (result.msg) {
      return result.msg;
    }
    dispatch(getPostsAll(result.posts));
    return result.posts;
  } catch (error) {
    return error.message;
  }
};
