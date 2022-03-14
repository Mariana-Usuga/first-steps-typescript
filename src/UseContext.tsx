import { useState } from 'react';

const useUser = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev + 1);
  return {
    value,
    increment,
    decrement,
  };
};

export default useUser;
