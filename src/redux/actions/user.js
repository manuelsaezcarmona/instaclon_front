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
  } catch (error) {
    // ToDo manejo de error ¿hago un logout?
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

export const registerUser = (user) => ({
  type: types.userRegister,
  payload: user
});

export const startRegister =
  // eslint-disable-next-line consistent-return
  (username, fullname, imgFile, email, password) => async () => {
    try {
      const avatarURL = await uploadFileToCloud(imgFile);
      await register(username, fullname, avatarURL, email, password);
      // dispatch(registerUser(userRegistered));
    } catch (error) {
      return error;
    }
  };
