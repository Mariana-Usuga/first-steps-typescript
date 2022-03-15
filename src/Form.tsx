/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-array-index-key */
import React, { FormEvent, ChangeEvent, FC, useState } from 'react';
import { FaCheckSquare, FaRegTimesCircle, FaTrashAlt } from 'react-icons/fa';

interface ITask {
  newTask: string
  done: boolean
}

const Form: FC = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([
      ...tasks, { newTask, done: false },
    ]);
    setNewTask('');
  };
  // const handleClick = (e: SyntheticEvent) => {
  //   console.log(e);
  // };
  const updateTask = (i:number) => {
    setTasks(tasks.map((task, index) => (index === i
      ? { ...task, done: !task.done } : task)));
  };

  const deleteTask = (i: number) => {
    setTasks(tasks.filter((task, index) => index !== i));
  };

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNewTask(e.target.value);
  };

  return (
    <>
      {tasks.map((task: ITask, i:number) => (
        <div key={i} className="card card-body mt-2">
          <div className="row">
            <div className="col-sm-6">
              <h4
                style={{ textDecoration: task.done ? 'line-through' : '' }}
              >
                {task.newTask}
              </h4>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => updateTask(i)}
              >
                {task.done ? <FaCheckSquare /> : <FaRegTimesCircle />}
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger" onClick={() => deleteTask(i)}>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="task"
                    onChange={handleChange}
                    value={newTask}
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
      {/* <div onClick={() => {}} onKeyDown={handleClick} role="button"
      tabIndex={0}>click me</div> */}
    </>
  );
};

export default Form;
