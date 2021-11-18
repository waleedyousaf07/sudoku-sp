import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import getUsers from '../../dummyComponent.api';

function Users() {
  const { url } = useRouteMatch();

  const {
    data: users,
    status,
    isFetching,
    isLoading,
  } = useQuery(['users', 2], () => getUsers({ page: 2 }), {
    // staleTime: 5000,
    // eslint-disable-next-line no-alert
    onError: () => alert('Something went wrong'),
  });

  if (isLoading) return `Loading data... ${status}`;
  if (isFetching) return `Fetching data... ${status}`;

  return (
    <ul>
      {users?.results?.map((user, index) => (
        <li key={user.name}>
          <Link to={`${url}/${index}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Users;
