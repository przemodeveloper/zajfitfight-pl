import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTfe1gnv9TrE-9uLPg0aoyxj0oUl_pyhE",
  authDomain: "zajfitfight-pl.firebaseapp.com",
  projectId: "zajfitfight-pl",
  storageBucket: "zajfitfight-pl.appspot.com",
  messagingSenderId: "361803221899",
  appId: "1:361803221899:web:2528063e7c1b49383d3d8e",
  measurementId: "G-0RW24YWJL0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
