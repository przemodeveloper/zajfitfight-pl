import { storyblokEditable } from '@storyblok/react';
import Table from './Table';

const ScheduleSection = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <Table content={blok.schedule} />
  </div>
);

export default ScheduleSection;
