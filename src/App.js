import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Menu from './pages/Menu';
import About from './pages/About';
import ConfirmedBooking from './pages/ConfirmedBooking';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/confirmed_booking' element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
