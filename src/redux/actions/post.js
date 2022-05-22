import { addPost, getPosts, deletePost } from '../../services/post.services';
import { types } from '../actiontypes';
import { uploadFileToCloud } from '../../helpers/uploadfile';
import { AddPostToUser } from './user';
import { addComment, getcommentbyID } from '../../services/comment.services';

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

export const setActivePost = (post) => ({
  type: types.postSetActive,
  payload: post
});

export const updatePost = (post) => ({
  type: types.postUpdate,
  payload: post
});

export const addCommentToPost = (content, activePost) => async (dispatch) => {
  try {
    const resp = await addComment(content, activePost.id);
    const { newComment } = resp;
    const commentReceived = await getcommentbyID(newComment.id);

    const { comment } = commentReceived;

    // esto es un AddCommentSinglePost
    activePost = {
      ...activePost,
      comments: [...activePost.comments, comment]
    };
    dispatch(updatePost(activePost));
    return comment;
  } catch (error) {
    return error;
  }
};

export const deleteOnePost = (postID) => ({
  type: types.postDelete,
  payload: postID
});

export const startPostDelete = (postid) => async (dispatch) => {
  try {
    const resp = await deletePost(postid);

    dispatch(deleteOnePost(postid));
    console.log(resp);
    return resp;
  } catch (error) {
    return error;
  }
};
