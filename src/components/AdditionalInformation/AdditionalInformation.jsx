import { storyblokEditable } from '@storyblok/react';

const AdditionalInformation = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="mt-8 md:mt-16" data-aos="fade-right">
    <p className="text-2xl md:text-3xl text-white whitespace-pre-wrap">{blok.text}</p>
  </div>
);

export default AdditionalInformation;
