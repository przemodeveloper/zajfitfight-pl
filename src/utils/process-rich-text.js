import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'F74amgM5h0aQ1Qp19Fh3uwtt'
});

export const processRichText = (storyblokHTML) => {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML)
  };
};
