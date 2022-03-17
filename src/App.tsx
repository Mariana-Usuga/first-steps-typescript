/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import TaskForm from './Todos/TaskForm';
import logo from './logo.svg';
// import Card from './Card';

const App = () => (
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
      <TaskForm />
    </main>
    <header className="App-header">

      {/* <Card title="mariana" description="description" numVotes={20} /> */}
      {/* <Card title="mariana2" description="description2"> */}
      {/* Este es el hijo */}
      {/* </Card> */}
    </header>
  </div>
);

export default App;
