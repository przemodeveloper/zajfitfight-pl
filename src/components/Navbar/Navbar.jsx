import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import styles from './Navbar.module.scss';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="flex justify-between items-center bg-secondary border-primary border-b-4">
      <Logo />
      <div className={`${styles.hamburger} mr-2`}>
        <Hamburger toggled={showNavbar} toggle={handleShowNavbar} color="#cf142b" size={32} />
      </div>
    </nav>
  );
};

export default Navbar;
