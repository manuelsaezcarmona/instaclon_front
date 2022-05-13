import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPosts } from './services/post.services';

function App() {
  useEffect(() => {
    getPosts().then((response) => console.log(response));
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
