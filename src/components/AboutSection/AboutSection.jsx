import { storyblokEditable } from '@storyblok/react';
import CoachPresentation from './CoachPresentation';

const AboutSection = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div data-aos="fade-right">
      <CoachPresentation description={blok.coachDescription} image={blok.image} />
    </div>
  </div>
);

export default AboutSection;
