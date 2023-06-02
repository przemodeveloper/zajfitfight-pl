import { storyblokEditable } from '@storyblok/react';
import styles from './HomeSection.module.scss';

const HomeSection = ({ blok }) => (
  <div {...storyblokEditable(blok)} className={styles['title-block']}></div>
);

export default HomeSection;
