import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const storyblokApi = getStoryblokApi();
  const [story, setStory] = useState();
  const gallery = useStoryblokState(story);

  const fetchGalleryStory = async () => {
    try {
      const { data } = await storyblokApi.get('cdn/stories/galeria', {
        version: 'draft'
      });
      setStory(data?.story);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGalleryStory();
  }, []);

  return gallery?.content && <StoryblokComponent blok={gallery.content} />;
};

export default Gallery;
