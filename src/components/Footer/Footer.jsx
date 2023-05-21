import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} bg-secondary py-4 flex justify-between flex-wrap px-8 border-primary border-t-4 text-base md:text-xl`}>
      <p>© 2023 Zajfit&Fight, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
