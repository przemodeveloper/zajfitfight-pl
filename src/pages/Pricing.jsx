import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { useEffect, useState } from 'react';

const Pricing = () => {
  const storyblokApi = getStoryblokApi();
  const [story, setStory] = useState({});
  const pricing = useStoryblokState(story);

  const fetchPricingStory = async () => {
    try {
      const { data } = await storyblokApi.get('cdn/stories/cennik', {
        version: 'draft'
      });
      setStory(data?.story);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPricingStory();
  }, []);

  return (
    pricing?.content && (
      <div className="container mx-auto">
        <StoryblokComponent blok={pricing.content} />
      </div>
    )
  );
};

export default Pricing;
