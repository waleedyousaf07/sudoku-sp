const getBoardData = async ({ difficulty }) => {
  const res = await fetch(`https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`);

  return res.json();
};

export default getBoardData;
