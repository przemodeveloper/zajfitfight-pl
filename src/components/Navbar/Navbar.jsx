import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import styles from './Navbar.module.scss';
import Logo from '../Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import logoWords from '../../assets/logo_words.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav
      className={`flex justify-between items-center bg-secondary border-primary border-b-4 ${styles.navbar}`}>
      <div className="flex items-center">
        <div className="flex items-center gap-x-7">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="ml-4 sm:ml-12 md:ml-4">
          <img src={logoWords} alt="logo_words" className="w-48" />
        </div>
      </div>

      <div className={`${styles.hamburger} mr-2`}>
        <Hamburger
          toggled={showNavbar}
          toggle={handleShowNavbar}
          color="#cf142b"
          size={32}
          label="Show menu"
        />
      </div>
      <div
        className={`${styles.elements}  ${
          showNavbar && styles.active
        } text-3xl text-white bg-secondary border-l-4 border-b-4 md:border-b-0 md:border-l-0 border-primary`}>
        <ul className="flex justify-between lg:items-center px-12 py-4 lg:h-full gap-x-4 lg:gap-x-8">
          <li onClick={() => setShowNavbar(false)}>
            <NavLink
              className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
              to="/">
              Strona główna
            </NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink
              className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
              to="galeria">
              Galeria
            </NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink
              className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
              to="o-nas">
              O nas
            </NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink
              className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
              to="grafik">
              Grafik
            </NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink
              className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
              to="cennik">
              Cennik
            </NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink
              className={({ isActive }) => (isActive ? styles['active-link'] : undefined)}
              to="kontakt">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
