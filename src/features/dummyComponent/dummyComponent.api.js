const getUsers = async ({ page }) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);

  return res.json();
};

export default getUsers;
