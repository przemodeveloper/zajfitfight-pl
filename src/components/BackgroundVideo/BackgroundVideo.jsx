import backgroundVideo from '../../assets/video.mp4';
import styles from './BackgroundVideo.module.scss';

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted className={styles.video}>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
