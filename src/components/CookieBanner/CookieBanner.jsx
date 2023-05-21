import styles from './CookieBanner.module.scss';

const CookieBanner = ({ onAcceptCookies, onDeclineCookies }) => {
  return (
    <div className={`text-white text-xl flex flex-col items-center ${styles.banner}`}>
      <div className="bg-secondary text-center p-4 border-primary border-4">
        <p className="mb-4">
          Ta strona używa plików cookie aby zapewnić najlepszą jakość korzystania z serwisu i pomóc
          nam w jego ulepszeniu.
        </p>
        <div>
          <button
            type="button"
            onClick={onAcceptCookies}
            className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 border-primary border-4">
            Zgoda
          </button>
          <button
            type="button"
            onClick={onDeclineCookies}
            className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 border-primary border-4">
            Odmowa
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
