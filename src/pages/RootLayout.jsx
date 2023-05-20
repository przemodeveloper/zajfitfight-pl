import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CookieBanner from '../components/CookieBanner/CookieBanner';
import { useEffect, useState } from 'react';
import { Cookies, getCookieConsentValue } from 'react-cookie-consent';
import { initGA } from '../utils/ga-utils';

const RootLayout = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAcceptCookies = () => {
    initGA('256961930');
    Cookies.set('CookieConsent', true);
    setShowBanner(false);
  };

  const handleDeclineCookies = () => {
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
    setShowBanner(false);
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookies();
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {showBanner && (
        <CookieBanner
          onAcceptCookies={handleAcceptCookies}
          onDeclineCookies={handleDeclineCookies}
        />
      )}
      <Footer />
    </>
  );
};

export default RootLayout;
