import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
