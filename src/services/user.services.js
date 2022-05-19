import axios from 'axios';

export const register = async (
  username,
  fullname,
  avatarURL,
  email,
  password
) => {
  // http://localhost:4000/user/new
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'user';
  const query = 'new';
  try {
    const response = await axios.post(`${baseURL}/${domain}/${query}`, {
      username,
      fullname,
      avatarURL,
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw new Error('could not add the user', error);
  }
};

export const logUser = async (email, password) => {
  // http://localhost:4000/auth
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'auth';
  try {
    const response = await axios.post(`${baseURL}/${domain}/`, {
      email,
      password
    });
    // const { id, ok, token, username } = response.data;
    if (!response.data.ok) {
      return response.data.msg;
    }
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw new Error('could not login the user', error);
  }
};

export const getUser = async () => {
  // http://localhost:4000/user/id
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'user';
  const query = 'id';
  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }

  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await axios.get(`${baseURL}/${domain}/${query}`, {
      headers
    });
    return response.data;
  } catch (error) {
    throw new Error('could not get the user data', error);
  }
};

export const updateUser = async (username, email) => {
  // http://localhost:4000/user
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'user';
  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await axios.patch(
      `${baseURL}/${domain}/`,
      { username, email },
      {
        headers
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('could not get the user data', error);
  }
};
