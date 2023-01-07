import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { redirect } from "react-router-dom";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import { home } from "./pages/Home";
import { downloads } from "./pages/Downloads";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <title>Sahib's Applications</title>
    <App />
    </BrowserRouter>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
