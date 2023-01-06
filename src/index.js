import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Website Name</a>
    
    
    
    
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
        <button type="button" class="btn btn-dark ">Home</button>
        </li>
        <li class="nav-item">
        <prep> </prep>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-dark">Downloads</button>
        </li>

      </ul>


  

      </div>
    </div>

      </nav>
    <App />
    </div>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
