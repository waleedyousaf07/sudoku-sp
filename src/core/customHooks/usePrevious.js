import { useRef, useEffect } from 'react';

const usePrevious = (value) => {
  const reference = useRef();

  useEffect(() => {
    reference.current = value;
  });

  return reference.current;
};

export default usePrevious;
