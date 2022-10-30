import App from './App';
import React from 'react';
import './global.scss';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.body as HTMLElement
);
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);