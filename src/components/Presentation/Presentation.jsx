import { processRichText } from '../../utils/process-rich-text';
import Image from '../Image/Image';
import './Presentation.scss';
import { storyblokEditable } from '@storyblok/react';

const Presentation = ({ blok }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-8"
      {...storyblokEditable(blok)}
      data-aos="fade-right">
      <div className="md:col-span-2">
        <Image src={blok.image.filename} alt={blok.image.alt} loading="eager" />
      </div>

      <div
        dangerouslySetInnerHTML={processRichText(blok.description)}
        className={`text-2xl text-white md:col-span-3 description`}
      />
    </div>
  );
};

export default Presentation;
