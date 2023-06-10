import styles from './Schedule.module.scss';
import { storyblokEditable } from '@storyblok/react';

const Table = ({ blok }) => (
  <div className="overflow-x-auto mt-8" {...storyblokEditable(blok)} data-aos="fade-right">
    <table className={styles.table}>
      <thead>
        <tr>
          {blok.schedule.thead.map((th) => {
            return (
              <th key={th._uid} className="text-2xl">
                {th.value}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="text-xl">
        {blok.schedule.tbody.map((tr) => {
          return (
            <tr key={tr._uid}>
              {tr.body.map((td) => {
                return <td key={td._uid}>{td.value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default Table;
