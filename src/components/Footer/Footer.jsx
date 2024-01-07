import SocialMedia from '../SocialMedia/SocialMedia';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} bg-secondary py-4 flex justify-between flex-wrap px-8 border-primary border-t-4 text-base md:text-xl`}>
      <p>© 2024 Zajfit&Fight, All Rights Reserved</p>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
