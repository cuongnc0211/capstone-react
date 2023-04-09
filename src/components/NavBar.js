function NavBar() {
  return (
    <header>
      <img className="logo" src="https://raw.githubusercontent.com/cuongnc0211/images-saver/master/images/Asset%2016%404x.png" />
      <nav>
        <ul className="nav-container">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">Menu</a></li>
          <li className="nav-item"><a href="#">Book</a></li>
          <li className="nav-item"><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;