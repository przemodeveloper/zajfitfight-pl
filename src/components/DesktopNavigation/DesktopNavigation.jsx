import styles from './DesktopNavigation.module.scss';
import logo_small from '../../assets/logo_small.png';
import { NavLink } from 'react-router-dom';

const DesktopNavigation = () => {
  return (
    <header className="text-white text-3xl flex justify-between">
      <div>
        <img src={logo_small} alt="logo" />
      </div>
      <div>
        <nav className="my-4 lg:my-0 flex justify-end">
          <ul className="flex flex-wrap gap-x-8 border-b-4 border-l-4 items-center px-12 py-8 border-primary bg-secondary">
            <li className={styles.nav_item}>
              <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)} to="/">
                Strona główna
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                to="galeria">
                Galeria
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                to="o-nas">
                O nas
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                to="grafik">
                Grafik
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                to="cennik">
                Cennik
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                to="kontakt">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DesktopNavigation;
