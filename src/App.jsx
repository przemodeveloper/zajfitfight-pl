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
import PriceItem from './components/PriceItem/PriceItem';
import ImagesGallery from './components/ImagesGallery/ImagesGallery';
import NotFound from './pages/NotFound';
import Information from './components/Information/Information';
import ContactForm from './components/Contact/ContactForm';
import ContactBlock from './components/ContactBlock/ContactBlock';

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
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

storyblokInit({
  accessToken: 'F74amgM5h0aQ1Qp19Fh3uwtt',
  use: [apiPlugin],
  components: {
    page: Page,
    header: Header,
    schedule: Table,
    presentation: Presentation,
    priceItem: PriceItem,
    information: Information,
    gallery: ImagesGallery,
    contactForm: ContactForm,
    contactBlock: ContactBlock
  }
});

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
