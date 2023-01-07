import logo from './logo.svg';
import './App.css';
import { Button, NavbarBrand } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";


function App() {
  return (
    <router>
    <div>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Website Name</a>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="btn btn-dark text-white" to="/">Home</Link>
        <Link class="btn btn-dark text-white" to="Downloads">Downloads</Link>
        </li>
    </ul>
    </div>
    </div>
    </nav>
    </div>

    <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/Downloads' element={<Downloads />} />

    </Routes>
    
    </router>
  );
}

export default App;
