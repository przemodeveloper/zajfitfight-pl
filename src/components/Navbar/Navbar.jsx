import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import styles from './Navbar.module.scss';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav>
      <div className="flex justify-between h-full">
        <Logo />
        <div className={`${styles.hamburger} p-2`}>
          <Hamburger toggled={showNavbar} toggle={handleShowNavbar} color="#cf142b" size={32} />
        </div>
        <div
          className={`${styles.elements}  ${
            showNavbar && styles.active
          } text-2xl text-white bg-secondary  border-b-4 border-l-4 border-primary`}>
          <ul className="flex justify-between px-12 py-8 gap-x-4 lg:gap-x-8">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
                to="/">
                Strona główna
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
                to="galeria">
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
                to="o-nas">
                O nas
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
                to="grafik">
                Grafik
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
                to="cennik">
                Cennik
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
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
