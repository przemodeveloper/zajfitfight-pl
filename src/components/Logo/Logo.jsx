import logo from '../../assets/logo_small.webp';
import styles from './Logo.module.scss';

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="logo" className={styles.logo} />
  </div>
);

export default Logo;
