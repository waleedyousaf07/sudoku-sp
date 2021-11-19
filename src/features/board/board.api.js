import axios from 'axios';

const getBoardData = async ({ difficulty }) => {
  const res = await fetch(`https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`);

  return res.json();
};

export const validateBoardData = async (payload) => {
  const { data: response } = await axios.post('https://vast-chamber-17969.herokuapp.com/validte', payload);
  return response.data;
};

export default getBoardData;
