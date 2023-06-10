import { processRichText } from '../../utils/process-rich-text';
import Image from '../Image/Image';
import '../../global.scss';
import { storyblokEditable } from '@storyblok/react';

const Presentation = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="mt-10 md:mt-16" data-aos="fade-right">
      <h1 className="text-4xl md:text-5xl text-white">{blok.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-8">
        <div className="md:col-span-2">
          <Image src={blok.image.filename} alt={blok.image.alt} loading="eager" />
        </div>

        <div
          dangerouslySetInnerHTML={processRichText(blok.description)}
          className={`text-2xl text-white md:col-span-3 description`}
        />
      </div>
    </div>
  );
};

export default Presentation;
