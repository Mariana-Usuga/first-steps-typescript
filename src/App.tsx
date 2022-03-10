/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Button from './Button';
import Card from './Card';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Button />
      <Card title="mariana" description="description" numVotes={20} />
      <Card title="mariana2" description="description2" />
      <Card title="mariana2" description="description2">
        Este es el hijo
      </Card>
    </header>
  </div>
);

export default App;
