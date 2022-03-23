/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import TaskForm from './Tasks/TaskForm';
import { Task } from './interfaces/Task';
import TaskList from './Tasks/TaskList';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addANewTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = ({ id }: Task) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const updateTask = ({ id }: Task) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div className="bg-dark" style={{ height: '100vh' }}>
      <main className="container p4">
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        <TaskForm addANewTask={addANewTask} />
      </main>
    </div>
  );
};

export default App;
