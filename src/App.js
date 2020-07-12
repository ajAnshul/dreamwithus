import React from 'react';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import Routing from './routing';
import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="main">
        <Routing />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
