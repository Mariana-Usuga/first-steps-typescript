import React, { SyntheticEvent, FormEvent, ChangeEvent, FC } from 'react';

const Form: FC = () => {
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

export default Form;
