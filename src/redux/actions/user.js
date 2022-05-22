import { uploadFileToCloud } from '../../helpers/uploadfile';
import { getUser, logUser, register } from '../../services/user.services';
import { types } from '../actiontypes';

export const login = (user) => ({
  type: types.userLogin,
  payload: user
});

export const logout = () => ({
  type: types.userLogout,
  payload: false
});

export const startLogout = () => (dispatch) => {
  localStorage.clear();
  dispatch(logout());
};

export const startLogin = (email, password) => async (dispatch) => {
  try {
    const result = await logUser(email, password);

    if (result.msg) {
      // se ha producido un error hacer un logout.
      // Se puede lanzar el modal con un mensaje.
      dispatch(logout());
    }

    const resp = await getUser();

    dispatch(login(resp.user));
    return resp;
  } catch (error) {
    return error;
  }
};

export const startCheckUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    const resp = await getUser();
    dispatch(login(resp.user));
  } else {
    dispatch(logout());
  }
};

export const AddPostToUser = (post) => ({
  type: types.userAddPost,
  payload: post
});

// No es una accion para enviarla al reducer.
export const startRegister = async (
  username,
  fullname,
  imgFile,
  email,
  password
) => {
  try {
    const avatarURL = await uploadFileToCloud(imgFile);
    const newUserResp = await register(
      username,
      fullname,
      avatarURL,
      email,
      password
    );
    return newUserResp;
    // Mensaje modal con registro exitoso??
  } catch (error) {
    return error;
  }
};

export const addCommentToUser = (comment) => ({
  type: types.userAddComment,
  payload: comment
});

export const deletePostToUser = (postid) => ({
  type: types.userDeletePost,
  payload: postid
});
