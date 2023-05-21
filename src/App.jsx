import './App.css';
import { Button, NavbarBrand } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";
import backgrounde from "./pages/images/bg.jpg";
import Freejc from "./pages/Freejc";
import Download from "./pages/Download";
import Hires from './pages/hires';
import logo from "./logopfp.png"

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = 0

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



function App() {
  return (
    <router>
    <title>Sahib's Applications</title>
    <div class="text-white">
    
    <nav id="navbar" class="navbar navbar-dark bg-dark rounded-full bg-opacity-50 sticky-top shadow-5-strong navbar-expand-lg ml-auto" data-bs-theme="dark">
    <div class="container-fluid d-flex align-items-center">
    
    <a class="navbar-brand text-center p-0" href="/">
      <img src={logo} class="d-inline-block align-text-top" width="28" height="28"></img>
      <b>&nbsp;Sahib</b>
    </a>
    
    
    <div class="navbar-expand-sm" id="navbarNav">
    
    <ul class="navbar-nav ml-auto ">
      <li class="nav-item d-flex gap-3">
        <div class="btn-group ">
          <Link class="btn-dark btn bg-dark bg-opacity-25 " to="/">Home</Link>
          <Link class="btn-dark btn bg-dark bg-opacity-25" to="/Downloads">Downloads</Link>
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
        <Route path="Hire" element={<Hires/>} />
    </Routes>
    </div>
    </router>
    
  );
}

export default App;
