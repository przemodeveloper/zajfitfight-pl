import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import Header from '../components/Header/Header';

const Home = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Header />
    {blok.body ? blok.body.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} />) : null}
  </main>
);

export default Home;
