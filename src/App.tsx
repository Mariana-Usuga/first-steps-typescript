import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <Card title="mariana" description='description' numVotes={20}/>
        <Card title="mariana2" description='description2'/>
        <Card title="mariana2" description='description2'>
          Este es el hijo
        </Card>
      </header>
    </div>
  );
}

export default App;
