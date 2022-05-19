import axios from 'axios';

export const addPost = async (imageURL, text) => {
  // http://localhost:4000/post/add
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'post';
  const query = 'add';
  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await axios.post(
      `${baseURL}/${domain}/${query}`,
      { imageURL, text },
      {
        headers
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('could not add the post', error);
  }
};

export const deletePost = async (postid) => {
  // http://localhost:4000/post/delete/627acec5e2ba492a429060eb
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'post';
  const query = `delete/${postid}`;
  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await axios.delete(`${baseURL}/${domain}/${query}`, {
      headers
    });
    return response.data;
  } catch (error) {
    throw new Error('could not delete the post', error);
  }
};

export const updatePost = async (postid, imageURL, text) => {
  // http://localhost:4000/post/update/627ace9fe2ba492a429060e6
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'post';
  const query = `update/${postid}`;
  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }
  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await axios.patch(
      `${baseURL}/${domain}/${query}`,
      { imageURL, text },
      {
        headers
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('could not update the post', error);
  }
};

export const getPosts = async () => {
  // http://localhost:4000/post

  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'post';

  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await axios.get(`${baseURL}/${domain}`, {
      headers
    });
    return response.data;
  } catch (error) {
    throw new Error('could not get the posts', error);
  }
};
