import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <img className="logo" src="https://raw.githubusercontent.com/cuongnc0211/images-saver/master/images/Asset%2016%404x.png" />
      <nav>
        <ul className="nav-container">
          <li className="nav-item">
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/menu' className='nav-link'>Menu</Link>
          </li>
          <li className="nav-item">
            <Link to='/reservation' className='nav-link'>Reservation</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;