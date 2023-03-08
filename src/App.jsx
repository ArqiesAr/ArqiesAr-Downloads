import './App.css';
import { Button, NavbarBrand } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";
import backgrounde from "./pages/images/bg.jpg";
import Freejc from "./pages/Freejc";
import Download from "./pages/Download";
import logo from "./logopfp.png"
function App() {
  return (
    <router>
    <title>Sahib's Applications</title>
    <div class="text-white">
    
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg ml-auto" data-bs-theme="dark" >
    <div class="container-fluid d-flex align-items-center">
    
    <a class="navbar-brand text-center p-1" href="/">
      <img src={logo} class="d-inline-block align-text-top" width="28" height="28"></img>
      <b> Sahib</b>
    </a>
    
    
    <div class="navbar-expand-sm" id="navbarNav">
    
    <ul class="navbar-nav ml-auto ">
        <li class="nav-item">
        <div class="btn-group ">
      <Link class="btn-dark btn" to="/">Home</Link>
      <Link class="btn-dark btn" to="/Downloads">Downloads</Link>
  

      </div>
        </li> 
    </ul>
    </div>
    </div>
    </nav>
    

    <Routes>
        <Route path='*' element={<Home/>} />
        <Route path='JCPPolicy' element={<Downloads/>} />
        <Route path='JCPPolicyfree' element={<Freejc/>} />
        <Route path="Downloads" element={<Download/>} />

    </Routes>
    </div>
    </router>
    
  );
}

export default App;
