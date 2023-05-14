import { storyblokEditable } from '@storyblok/react';
import styles from './HomeSection.module.scss';
import MainTitle from './MainTitle';

const HomeSection = ({ blok }) => (
  <div {...storyblokEditable(blok)} className={styles['title-block']}>
    <div data-aos="fade-right">
      <MainTitle title={blok.title} />
    </div>
  </div>
);

export default HomeSection;
