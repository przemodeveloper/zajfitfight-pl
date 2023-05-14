import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { useEffect, useState } from 'react';

const Schedule = () => {
  const storyblokApi = getStoryblokApi();
  const [story, setStory] = useState({});
  const schedule = useStoryblokState(story);

  const fetchScheduleStory = async () => {
    try {
      const { data } = await storyblokApi.get('cdn/stories/grafik', {
        version: 'draft'
      });
      setStory(data?.story);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchScheduleStory();
  }, []);

  return (
    schedule?.content && (
      <div className="container mx-auto">
        <StoryblokComponent blok={schedule.content} />
      </div>
    )
  );
};

export default Schedule;
