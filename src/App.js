import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
