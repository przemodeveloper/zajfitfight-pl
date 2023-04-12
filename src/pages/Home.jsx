import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

const Home = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <h1>Page in construction</h1>
    {blok.body ? blok.body.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} />) : null}
  </main>
);

export default Home;
