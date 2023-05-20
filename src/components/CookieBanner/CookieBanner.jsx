import styles from './CookieBanner.module.scss';

const CookieBanner = ({ onAcceptCookies, onDeclineCookies }) => {
  return (
    <div className={`text-white text-xl flex flex-col items-center ${styles.banner}`}>
      <div className="bg-secondary text-center p-6 border-primary border-t-4 border-b-4">
        <p>
          Ta strona używa plików cookie aby zapewnić najlepszą jakość korzystania z serwisu i pomóc
          nam w jego ulepszeniu.
        </p>
        <div>
          <button
            type="button"
            onClick={onAcceptCookies}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
            Zgoda
          </button>
          <button
            type="button"
            onClick={onDeclineCookies}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            Odmowa
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
