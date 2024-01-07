import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: 'AIzaSyBTfe1gnv9TrE-9uLPg0aoyxj0oUl_pyhE',
  authDomain: 'zajfitfight-pl.firebaseapp.com',
  projectId: 'zajfitfight-pl',
  storageBucket: 'zajfitfight-pl.appspot.com',
  messagingSenderId: '361803221899',
  appId: '1:361803221899:web:2528063e7c1b49383d3d8e',
  measurementId: 'G-0RW24YWJL0'
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

reportWebVitals();
