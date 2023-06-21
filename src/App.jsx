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
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <router>
    <title>Sahib's Applications</title>
    <div class="text-white">
    
    

    <Routes>
        <Route path='*' element={<Home/>} />
    </Routes>

    </div>

    </router>

    
  );
}

export default App;
