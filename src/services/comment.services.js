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
  const headContent = { Authorization: `Bearer ${token}` };
  try {
    const response = await axios.post(
      `${baseURL}/${domain}/${query}`,
      {
        content,
        postID
      },
      { headers: headContent }
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
  const headContent = { Authorization: `Bearer ${token}` };
  try {
    const response = await axios.delete(`${baseURL}/${domain}/${query}/`, {
      headers: headContent
    });
    return response.data;
  } catch (error) {
    throw new Error('could not delete the comment');
  }
};
