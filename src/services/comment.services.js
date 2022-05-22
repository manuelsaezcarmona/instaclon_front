import axios from 'axios';

export const addComment = async (content, postID) => {
  // http://localhost:4000/comment/add
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'comment';
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
      {
        content,
        postID
      },
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error('could not add the comment', error);
  }
};

export const deleteComment = async (commentid) => {
  // http://localhost:4000/comment/delete/627b8510d4642fb638d146a1
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'comment';
  const query = `delete/${commentid}`;
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
    throw new Error('could not delete the comment');
  }
};

export const updateComment = async (commentid, content) => {
  // http://localhost:4000/comment/update/627b613dcdba63fe9578f406
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'comment';
  const query = `update/${commentid}`;
  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await axios.patch(
      `${baseURL}/${domain}/${query}`,
      { content },
      {
        headers
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('could not update the comment');
  }
};

export const getCommentsByPost = async (postID) => {
  // http://localhost:4000/comment/
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'comment';

  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await fetch(`${baseURL}/${domain}/${postID}`, {
      method: 'GET',
      headers
    });

    return response.json();
  } catch (error) {
    throw new Error('Could not get the comments by post');
  }
};

export const getcommentbyID = async (commentID) => {
  // http://localhost:4000/comment/id/62815bc1babbd093ae7bd1ae
  const baseURL = process.env.REACT_APP_API_URL;
  const domain = 'comment';
  const query = `id/${commentID}`;

  const token = localStorage.getItem('token');
  const msg = 'No se encuentra el token';

  if (!token) {
    return msg;
  }
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await fetch(`${baseURL}/${domain}/${query}`, {
      method: 'GET',
      headers
    });

    return response.json();
  } catch (error) {
    throw new Error('Could not get the comment by ID');
  }
};
