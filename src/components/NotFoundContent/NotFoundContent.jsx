import styles from './NotFoundContent.module.scss';

const NotFoundContent = () => {
  return (
    <div className={styles.content}>
      <div className=" text-white text-center">
        <h1 className="text-9xl ">404</h1>
        <h1 className="text-6xl">Nie znaleźliśmy takiej strony</h1>
      </div>
    </div>
  );
};

export default NotFoundContent;
