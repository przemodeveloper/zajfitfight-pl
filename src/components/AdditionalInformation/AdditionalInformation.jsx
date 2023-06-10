import { storyblokEditable } from '@storyblok/react';

const AdditionalInformation = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="mt-8 md:mt-16">
    <p className="text-2xl md:text-3xl text-white">{blok.text}</p>
  </div>
);

export default AdditionalInformation;
