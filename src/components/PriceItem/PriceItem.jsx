import { storyblokEditable } from '@storyblok/react';
import { processRichText } from '../../utils/process-rich-text';
import '../../global.scss';

const PriceItem = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="mt-8 md:mt-16" data-aos="fade-right">
    <h1 className="text-4xl md:text-5xl text-white">{blok.title}</h1>
    <div
      dangerouslySetInnerHTML={processRichText(blok.list)}
      className={`text-2xl text-white md:col-span-3 description`}
    />
  </div>
);

export default PriceItem;
