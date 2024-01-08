import { storyblokEditable } from '@storyblok/react';
import styles from './ImagesGallery.module.scss';
import CustomImage from '../CustomImage/CustomImage';
import { useState } from 'react';
import { UilArrowCircleLeft, UilArrowCircleRight, UilTimesCircle } from '@iconscout/react-unicons';

const ImagesGallery = ({ blok }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleNextSlide = () => {
    setSlideNumber((prev) => {
      if (prev === blok.photos.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePrevSlide = () => {
    setSlideNumber((prev) => {
      if (prev === 0) {
        return blok.photos.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div {...storyblokEditable(blok)} className="mt-10 md:mt-16" data-aos="fade-right">
      {openModal && (
        <div className={styles['slider-wrap']}>
          <UilTimesCircle className={styles.close} onClick={handleCloseModal} />
          <UilArrowCircleLeft className={styles.prev} onClick={handleNextSlide} />
          <UilArrowCircleRight className={styles.next} onClick={handlePrevSlide} />

          <div className={styles['full-screen-image']}>
            <CustomImage
              src={blok.photos[slideNumber].filename}
              alt={blok.photos[slideNumber].alt}
              className={styles.image}
            />
          </div>
        </div>
      )}

      <div className={styles['gallery-wrap']}>
        {blok.photos.length > 0 &&
          blok.photos.map((photo, index) => {
            return (
              <div className={styles.photo} key={index} onClick={() => handleOpenModal(index)}>
                <CustomImage
                  src={photo.filename}
                  alt={photo.alt}
                  loading="eager"
                  className="object-contain"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImagesGallery;
