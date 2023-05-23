import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'eEd2NYvdyNmSY3A9WcOmkgtt'
});

export const processRichText = (storyblokHTML) => {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML)
  };
};
