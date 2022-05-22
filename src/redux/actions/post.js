import { addPost, getPosts } from '../../services/post.services';
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

    return resp;
  } catch (error) {
    return error;
  }
};

/**  respuesta de addComment
 * {
    "ok": true,
    "msg": "create comment",
    "newComment": {
        "content": "Suelen estar en china",
        "userIDcomment": "628159ffbabbd093ae7bd1a1",
        "postIDcomment": "6289260618dfe071cb93876e",
        "createdAt": "2022-05-22T09:55:16.609Z",
        "updatedAt": "2022-05-22T09:55:16.609Z",
        "__v": 0,
        "id": "628a08846cf9d2a69928231e"
    }
}

respuesta de getcommentbyID

{
    "ok": true,
    "comment": {
        "content": "Y bien hecho al horno!!",
        "userIDcomment": {
            "username": "manu",
            "fullname": "Manuel Saez",
            "email": "manu@manu.com",
            "avatarURL": "https://avatars.githubusercontent.com/u/70754764?v=4",
            "id": "628159ffbabbd093ae7bd1a1"
        },
        "postIDcomment": {
            "text": "Tocaba merluza en salsa verde",
            "createdAt": "2022-05-15T19:54:56.012Z",
            "updatedAt": "2022-05-15T20:03:15.410Z",
            "id": "62815a90babbd093ae7bd1a4"
        },
        "createdAt": "2022-05-15T20:00:01.813Z",
        "updatedAt": "2022-05-15T20:00:01.813Z",
        "__v": 0,
        "id": "62815bc1babbd093ae7bd1ae"
    }
}

 */
