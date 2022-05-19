/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { PhotoClonApp } from './PhotoClonApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<PhotoClonApp />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// <React.StrictMode>
