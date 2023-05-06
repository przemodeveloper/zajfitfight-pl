import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo_small from '../../assets/logo_small.png';
import './Navbar.scss';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="flex justify-between h-full">
        <div className="logo">
          <img src={logo_small} alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h1>HAMBURGER</h1>
        </div>
        <div
          className={`nav-elements  ${
            showNavbar && 'active'
          } text-2xl text-white border-b-4 border-l-4 border-primary bg-secondary`}>
          <ul className="flex justify-between px-12 py-8 gap-x-8">
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/">
                Strona główna
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                to="galeria">
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                to="o-nas">
                O nas
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                to="grafik">
                Grafik
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                to="cennik">
                Cennik
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                to="kontakt">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
