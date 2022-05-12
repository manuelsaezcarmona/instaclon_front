import axios from 'axios';

export const register = async (username, email, password) => {
  // http://localhost:4000/user/new
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'user';
  const query = 'new';
  try {
    const response = await axios.post(`${baseURL}/${domain}/${query}`, {
      username,
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
