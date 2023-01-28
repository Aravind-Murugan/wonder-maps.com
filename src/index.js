import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './app/MainApp.jsx';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
