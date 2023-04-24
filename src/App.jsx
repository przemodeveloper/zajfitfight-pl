import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from './components/Page/Page';
import Home from './pages/Home';
import About from './pages/About';

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
      }
    ]
  }
]);

storyblokInit({
  accessToken: 'eEd2NYvdyNmSY3A9WcOmkgtt',
  use: [apiPlugin],
  components: {
    page: Page
  }
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
