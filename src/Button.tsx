import React, { SyntheticEvent, FormEvent, ChangeEvent, FC, useState } from 'react';

const Button: FC = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev + 1);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  const handleClick = (e: SyntheticEvent) => {
    console.log(e);
  };

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} />
        <button type="button">
          submit
        </button>
      </form>
      <div onClick={() => {}} onKeyDown={handleClick} role="button" tabIndex={0}>click me</div>
    </>
  );
};

export default Button;
