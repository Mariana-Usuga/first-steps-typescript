/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import logo from './logo.svg';
import TaskForm from './Todos/TaskForm';
import { Task } from './interfaces/Task';
import TaskList from './Todos/TaskList';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addANewTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task: Task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const updateTask = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div className="bg-dark" style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="" className="navbar-brand">
            <img src={logo} alt="react-logo" style={{ width: '4rem' }} />
            Learning TypeScript
          </a>
        </div>
      </nav>
      <main className="container p4">
        {/* <div className="row"> */}
        {/* <div className="col-md-4"> */}
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />

        <TaskForm addANewTask={addANewTask} />
        {/* </div> */}
        {/* <div className="col-md-8"> */}
        {/* <div className="row"> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </main>
      <header className="App-header">

        {/* <Card title="mariana" description="description" numVotes={20} /> */}
        {/* <Card title="mariana2" description="description2"> */}
        {/* Este es el hijo */}
        {/* </Card> */}
      </header>
    </div>
  );
};

export default App;
