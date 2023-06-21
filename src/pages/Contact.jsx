import { useStoryblokState, getStoryblokApi, StoryblokComponent } from '@storyblok/react';
import { useEffect, useState } from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactBlock from '../components/ContactBlock/ContactBlock';

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
        <div className="mb-4 md:mb-8">
          <ContactForm />
        </div>
        <ContactBlock email="zajfitfight@gmail.com" phone="+123456789" />
      </div>
    )
  );
};

export default Contact;
