import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { useEffect, useState } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';

const Contact = () => {
  const storyblokApi = getStoryblokApi();
  const [story, setStory] = useState({});
  const contact = useStoryblokState(story);

  const fetchContactStory = async () => {
    try {
      const { data } = await storyblokApi.get('cdn/stories/kontakt', {
        version: 'draft'
      });
      setStory(data?.story);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContactStory();
  }, []);

  return (
    contact?.content && (
      <div className="container mx-auto">
        <StoryblokComponent blok={contact.content} />
        <ContactSection />
      </div>
    )
  );
};

export default Contact;
