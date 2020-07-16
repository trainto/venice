import React from 'react';
import Layout from './components/common/layout';
import Store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const store = Store.useStore();

  return (
    <div className={`App ${store.theme}`}>
      <Layout></Layout>
    </div>
  );
}

export default App;
