import { storyblokEditable } from '@storyblok/react';
import styles from './HomeSection.module.scss';

const HomeSection = ({ blok }) => (
  <div {...storyblokEditable(blok)} className={styles.title}>
    <div data-aos="fade-right">
      <h1 className="text-8xl md:text-9xl text-white">{blok.title}</h1>
    </div>
  </div>
);

export default HomeSection;
