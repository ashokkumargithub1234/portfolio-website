// Write your JS code here
import "./index.css";

const Header = () => (
  <nav className="header-container">
    <p className="content-header">Madelyn Torff</p>
    <ul className="menus-link">
      <a href="#projectsView">
        <li className="menu-item">Projects</li>
      </a>
      <a href="#aboutView">
        <li className="menu-item">About</li>
      </a>
      <a href="#contactsView">
        <li className="menu-item">Contacts</li>
      </a>
    </ul>
  </nav>
);
export default Header;
