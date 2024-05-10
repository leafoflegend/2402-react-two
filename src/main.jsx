import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const accounts = [
    {
        name: 'Edwin',
    },
    {
        name: 'Yukun',
    },
    {
        name: 'Alberto',
    },
];

ReactDOM.createRoot(document.getElementById('bootcamp')).render(
  <React.StrictMode>
    <App accounts={accounts} />
  </React.StrictMode>,
);
