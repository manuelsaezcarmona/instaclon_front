import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { updateComment } from './services/comment.services';

function App() {
  useEffect(() => {
    updateComment(
      '627e2a024162cfd473dc8149',
      'Actualizando comentario desde la App de React'
    ).then((response) => console.log(response));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> y probamos en production los entornos.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
