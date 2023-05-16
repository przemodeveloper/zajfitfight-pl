import backgroundVideo from '../../assets/video.mp4';
import styles from './BackgroundVideo.module.scss';

const BackgroundVideo = () => {
  return (
    <video muted autoPlay playsInline loop className={styles.video}>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
