import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from './components/Page/Page';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Schedule from './pages/Schedule';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Table from './components/Schedule/Schedule';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'o-nas',
        element: <About />
      },
      {
        path: 'kontakt',
        element: <Contact />
      },
      {
        path: 'galeria',
        element: <Gallery />
      },
      {
        path: 'cennik',
        element: <Pricing />
      },
      {
        path: 'grafik',
        element: <Schedule />
      }
    ]
  }
]);

storyblokInit({
  accessToken: 'eEd2NYvdyNmSY3A9WcOmkgtt',
  use: [apiPlugin],
  components: {
    page: Page,
    header: Header,
    schedule: Table,
    presentation: Presentation
  }
});

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
