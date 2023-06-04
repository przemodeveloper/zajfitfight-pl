import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { useEffect, useState } from 'react';

const About = () => {
  const storyblokApi = getStoryblokApi();
  const [story, setStory] = useState({});
  const about = useStoryblokState(story);

  const fetchAboutStory = async () => {
    try {
      const { data } = await storyblokApi.get('cdn/stories/o-nas', {
        version: 'draft'
      });
      setStory(data?.story);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAboutStory();
  }, []);

  console.log(about.content);

  return (
    about?.content && (
      <div className="container mx-auto">
        <StoryblokComponent blok={about.content} />
      </div>
    )
  );
};

export default About;
