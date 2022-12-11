import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVZchTaa9PXALFkdeuHRGQQP6vpMXBOg4",
  authDomain: "coderhouse-mi-farmacia-ecomm.firebaseapp.com",
  projectId: "coderhouse-mi-farmacia-ecomm",
  storageBucket: "coderhouse-mi-farmacia-ecomm.appspot.com",
  messagingSenderId: "92345187053",
  appId: "1:92345187053:web:4674af4d8ccbdcf634aae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
