/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-array-index-key */
import React, { ChangeEvent, FormEvent, useState, useRef } from 'react';
import { Task } from '../interfaces/Task';

interface Props {
  addANewTask: (task: Task) => void
}

const TaskForm = ({ addANewTask }:Props) => {
  const [task, setTask] = useState({
    id: 0,
    title: '',
  });

  const inputTitle = useRef<HTMLInputElement>(null);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * (200 - 1)) + 1,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask({ id: 0, title: '' });
    inputTitle.current?.focus();
  };

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
                  value={task.title}
                  onChange={handleChange}
                  className="form-control"
                  autoFocus
                  ref={inputTitle}
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
