import { Outlet } from 'react-router-dom';
import DesktopNavigation from '../components/DesktopNavigation/DesktopNavigation';

const RootLayout = () => (
  <>
    <DesktopNavigation />
    <main>
      <Outlet />
    </main>
  </>
);

export default RootLayout;
