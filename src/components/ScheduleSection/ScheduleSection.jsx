import { storyblokEditable } from '@storyblok/react';
import Table from './Table';

const ScheduleSection = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="mt-8" data-aos="fade-right">
    <div className="mx-2 sm:mx-0 ">
      <Table content={blok.schedule} />
    </div>
  </div>
);

export default ScheduleSection;
