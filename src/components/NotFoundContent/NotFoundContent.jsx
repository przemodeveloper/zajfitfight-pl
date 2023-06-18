import styles from './NotFoundContent.module.scss';

const NotFoundContent = () => {
  return (
    <div className={styles.content}>
      <div className="flex justify-center items-center flex-col text-white">
        <h1 className="text-8xl ">404</h1>
        <h1 className="text-5xl">Nie znaleźliśmy takiej strony</h1>
      </div>
    </div>
  );
};

export default NotFoundContent;
