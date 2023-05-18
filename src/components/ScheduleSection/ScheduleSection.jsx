import { storyblokEditable } from '@storyblok/react';
import Table from './Table';

const ScheduleSection = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="mt-16">
    <Table content={blok.schedule} />
  </div>
);

export default ScheduleSection;
