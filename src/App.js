import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { addComment } from './services/comment.services';

function App() {
  useEffect(() => {
    addComment('Comentario desde React', '627e05c959e3e7ef42135559').then(
      (response) => console.log(response)
    );
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
