import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { useEffect, useState } from 'react';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';

const Home = () => {
  const storyblokApi = getStoryblokApi();
  const [story, setStory] = useState();
  const home = useStoryblokState(story);

  const fetchHomeStory = async () => {
    try {
      const { data } = await storyblokApi.get('cdn/stories/home', {
        version: 'draft'
      });
      setStory(data?.story);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHomeStory();
  }, []);

  return (
    home?.content && (
      <>
        <BackgroundVideo />
        <StoryblokComponent blok={home.content} />
      </>
    )
  );
};

export default Home;
