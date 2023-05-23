import { processRichText } from '../../utils/process-rich-text';
import Image from '../Image/Image';
import styles from './CoachPresentation.module.scss';

const CoachPresentation = ({ description, image }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-8">
      <div className="md:col-span-2">
        <Image src={image.filename} alt={image.alt} loading="eager" className={styles.image} />
      </div>

      <div
        dangerouslySetInnerHTML={processRichText(description)}
        className="text-2xl text-white md:col-span-3"
      />
    </div>
  );
};

export default CoachPresentation;
