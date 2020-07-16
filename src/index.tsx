import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Store.Provider>
      <App />
    </Store.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
