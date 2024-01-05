import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN
});

export const processRichText = (storyblokHTML) => {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML)
  };
};
