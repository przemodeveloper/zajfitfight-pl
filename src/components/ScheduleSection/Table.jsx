import styles from './Table.module.scss';

const Table = ({ content }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        {content.thead.map((th) => {
          return (
            <th key={th._uid} className="text-2xl">
              {th.value}
            </th>
          );
        })}
      </tr>
    </thead>
    <tbody className="text-xl">
      {content.tbody.map((tr) => {
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
);

export default Table;
