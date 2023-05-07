import { useEffect, useRef } from 'react';
import backgroundVideo from '../../assets/video.mp4';
import styles from './BackgroundVideo.module.scss';

const BackgroundVideo = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <video muted loop className={styles.video} ref={videoRef}>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
