function Navbar() {
    return (
        <nav className="navbar">
          <div className="navbar-container">
            <a href="/" className="navbar-logo">
              Akm
            </a>
            <ul className="navbar-menu">
              <li className="navbar-item">
                <a href="/" className="navbar-link">Home</a>
              </li>
              <li className="navbar-item">
                <a href="/AboutUs" className="navbar-link">AboutUs</a>
              </li>
              <li className="navbar-item">
                <a href="/Menu" className="navbar-link">Menu</a>
              </li>
              <li className="navbar-item">
                <a href="/Contact" className="navbar-link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>


            );
}
            export default Navbar;