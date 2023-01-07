import logo from './logo.svg';
import './App.css';
import { Button, NavbarBrand } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";
import backgrounde from "./pages/images/bg.jpg";


function App() {
  return (
    <router>
    <title>Sahib's Applications</title>
    <div class="text-white" style={{minWidth: "1000"}}>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg" data-bs-theme="dark" s>
    <div class="container-fluid d-flex align-items-center">
    <a class="navbar-brand" >Sahib's Applications</a>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
        <li class="nav-item">
        <div class="btn-group " role="group" aria-label="Basic example">
      <a class="btn-dark btn" href="https://github.com/Blackysh" target="_blank">Github</a>
      <a class="btn-dark btn" href="https://www.youtube.com/@sahibb" target="_blank">Youtube</a>
      <a class="btn-dark btn" href="https://discord.com/users/772047297961525269" target="_blank">Discord</a>
      <a class="btn-dark btn" href="https://open.spotify.com/user/31f5d2yg3lc75car3n6rmq22ygqe?si=b51dde3884014ff5" target="_blank">Spotify</a>
      <a class="btn-dark btn" href="https://stackoverflow.com/users/20621348/sahib?tab=profile" target="_blank">StackOverflow</a>
      <a class="btn-dark btn" href="https://twitter.com/Blackysh21" target="_blank">Twitter</a>

     
  

      </div>
        </li> 
    </ul>
    </div>
    </div>
    </nav>
    

    <Routes>
        <Route path='*' element={<Home />} />
  

    </Routes>
    </div>
    </router>
    
  );
}

export default App;
