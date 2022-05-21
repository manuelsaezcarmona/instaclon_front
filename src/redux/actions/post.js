import { addPost, getPosts } from '../../services/post.services';
import { types } from '../actiontypes';
import { uploadFileToCloud } from '../../helpers/uploadfile';
import { AddPostToUser } from './user';

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

export const AddPost = (post) => ({
  type: types.postAdd,
  payload: post
});

export const startAddPost = (imgFile, text) => async (dispatch) => {
  try {
    const avatarURL = await uploadFileToCloud(imgFile);

    const resp = await addPost(avatarURL, text);

    if (resp.ok) {
      const { post } = resp;
      dispatch(AddPost(post));
      dispatch(AddPostToUser(post));
    }
    return resp;
  } catch (error) {
    return error;
  }
};
