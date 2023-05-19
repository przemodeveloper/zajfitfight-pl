import styles from './Footer.module.scss';
import { UilLinkedin } from '@iconscout/react-unicons';

const Footer = () => {
  return (
    <div
      className={`${styles.footer} bg-secondary py-4 flex justify-between flex-wrap px-8 border-primary border-t-4 text-xl`}>
      <p>© 2023 Zajfit&Fight, All Rights Reserved</p>
      <span className="flex">
        <p className="mr-2">Created by Przemek Górecki</p>
        <a href="https://www.linkedin.com/in/przemyslaw-gorecki/" rel="noreferrer" target="_blank">
          <UilLinkedin />
        </a>
      </span>
    </div>
  );
};

export default Footer;
