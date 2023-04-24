import { Link } from 'react-router-dom';
import styles from './DesktopNavigation.module.scss';
import logo_small from '../../assets/logo_small.png';

const DesktopNavigation = () => {
  return (
    <header className="container mx-auto flex flex-wrap justify-between items-center p-8 text-primary text-3xl">
      <img src={logo_small} alt="logo" />
      <nav className="my-4 lg:my-0 border-b-4 border-l-4 border-primary p-4">
        <ul className="flex flex-wrap gap-x-8">
          <li className={styles.nav_item}>
            <Link to="/">Strona główna</Link>
          </li>
          <li className={styles.nav_item}>Galeria</li>
          <li className={styles.nav_item}>
            <Link to="o-nas">O nas</Link>
          </li>
          <li className={styles.nav_item}>Grafik</li>
          <li className={styles.nav_item}>Cennik</li>
          <li className={styles.nav_item}>Kontakt</li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
