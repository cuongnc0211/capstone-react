import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
