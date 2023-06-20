import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYbRAKNM9kKxr9E9RJAiKtAGmP9xXTUeU",
    authDomain: "reactjsplaystationapp.firebaseapp.com",
    projectId: "reactjsplaystationapp",
    storageBucket: "reactjsplaystationapp.appspot.com",
    messagingSenderId: "58859361216",
    appId: "1:58859361216:web:9d3c6ea254c7309ce32e25"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

