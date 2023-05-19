import { storyblokEditable } from '@storyblok/react';

const Header = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="mt-16">
    <h1 className="text-6xl text-white">{blok.title}</h1>
  </div>
);

export default Header;
