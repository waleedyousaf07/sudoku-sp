import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function User(props) {
  const {
    counter,
    increment,
    decrement,
    incrementByAmount,
  } = props;

  const { index } = useParams();

  return (
    <>
      <h3>Requested user ID: {index}</h3>
      <h3>
        My dummy component with counter value: {counter}
      </h3>
      <div>
        <button className="margin-sm" type="button" onClick={() => increment()}>Increment</button>
        <button className="margin-sm" type="button" onClick={() => decrement()}>Decrement</button>
        <button className="margin-sm" type="button" onClick={() => incrementByAmount(10)}>Increment By 10</button>
      </div>
    </>
  );
}

User.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementByAmount: PropTypes.func.isRequired,
};

export default User;
