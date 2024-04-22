import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink
          className={`navbar-brand ${activeItem === 'Home' ? 'active' : ''}`}
          to="/"
          onClick={() => handleItemClick('Home')}
        >
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  activeItem === 'HelloWorld' ? 'active' : ''
                }`}
                to="/hello-world"
                onClick={() => handleItemClick('HelloWorld')}
              >
                HelloWorld
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${activeItem === 'List' ? 'active' : ''}`}
                to="/list"
                onClick={() => handleItemClick('List')}
              >
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
