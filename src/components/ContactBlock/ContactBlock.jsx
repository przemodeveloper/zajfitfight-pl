import { storyblokEditable } from '@storyblok/react';

const ContactBlock = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex justify-center items-center text-4xl md:text-5xl text-white flex-col md:flex-row"
      data-aos="fade-right"
      data-aos-once="true">
      <p className="border-b-4 pb-4 md:border-b-0 md:pb-0 md:border-r-4 md:pr-4">{blok.email}</p>
      <p className="pt-4 md:pt-0 md:pl-4">{blok.phone}</p>
    </div>
  );
};

export default ContactBlock;
