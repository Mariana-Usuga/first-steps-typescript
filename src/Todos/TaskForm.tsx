/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-array-index-key */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../interfaces/Task';

interface Props {
  addANewTask: (task: Task) => void
}

const TaskForm = ({ addANewTask }:Props) => {
  const [task, setTask] = useState({
    title: '',
  });

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask({ title: '' });
  };

  console.log('working');

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  name="title"
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  autoFocus
                />
                <button type="submit" className="btn btn-success mt-2">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
