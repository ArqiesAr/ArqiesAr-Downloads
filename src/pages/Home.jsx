import React from "react";
import backgrounde from "./images/bg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ProgressBar } from "react-bootstrap";
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Cards from "./CARDS";
import logo from "./logopfp.png";
import pythonlogo from "./py.png"
import clogo from "./c.png";
import javalogo from "./java.png"
import javascripte from "./js.png";
import { BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Download from './Download'
import hello from './inort.png'
import Freejc from "./Freejc";
import Downloads from './Downloads'
import downarrow from './images/downarrow.png'

const Home = () => {
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
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 105,
      y: mousePosition.y - 105,
      backgroundColor: "#DEDEDE",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div class="d-flex flex-column bgcolor gap-3 justify-content-center">
      <title>Sahib's Applications</title>
      <div class="btn-group d-flex m-3 justify-content-center" role="group" aria-label="Basic example" >
      </div> 

<figure class="d-flex dl-page flex-column gap-0 p-1 bg-opacity-100 backdrop-blur-sm	" style={{maxWidth: "100%", minWidth:'100%'}}>
  <h1 class="display-3 text-center"><strong>Want to see any of my projects?</strong></h1>
  <Download/>
</figure>
</div>




  );
};
  
export default Home;