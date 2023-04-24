import { storyblokEditable } from '@storyblok/react';

const Header = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid} data-test="header">
    <div>
      <h1>{blok.title}</h1>
      <h2>{blok.subTitle}</h2>
    </div>
  </div>
);

export default Header;
