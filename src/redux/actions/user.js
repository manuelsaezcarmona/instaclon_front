import { getUser, logUser } from '../../services/user.services';
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

// Register .
// 1 recoge los datos del form. Incluyendo la imagen
// c
