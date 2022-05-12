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
