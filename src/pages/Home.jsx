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
      backgroundColor: "#d2d2d9",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div class="home">
      <title>Sahib's Applications</title>
      <div class="btn-group d-flex" role="group" aria-label="Basic example" >
      </div> 
      <div class="d-flex justify-content-center flex-column p-5">
      <h1 id="info" class="display-2 text-center text-info">
       <strong> <b onMouseEnter={textEnter} onMouseLeave={textLeave}> Hi, I am Sahib! </b> </strong>
      </h1> 
      <p onMouseEnter={textEnter} onMouseLeave={textLeave} class="display-5 text-center"><em>
      Hey there, my name is Sahib and I'm a programmer/developer!
      </em></p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave} class="display-5 text-center"><em>
      I mostly create desktop applications and websites, 
      </em></p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave} class="display-5 text-center"><em>
      but I can develop other types of software. Like  bots, mobile apps, servers, etc. 
      </em></p>
      </div>
     
      



<div class="d-flex flex-wrap justify-content-center gap-10 ">




<figure onMouseEnter={textEnter} onMouseLeave={textLeave} class="d-flex flex-column transition hover:backdrop-blur-md drop-shadow-4xl gap-1 hover:scale-100 scale-95 rounded-lg p-8 dark:bg-slate-800k bg-opacity-10 bg-slate-200 backdrop-blur-sm" style={{width: "480"}}>
<li class="d-flex gap-3 mr-auto">
  <img class="w-20 h-21 rounded-full mr-auto" src={pythonlogo} ></img>
  <h1 class="display-4 text-center"><strong>Python</strong></h1></li>
  
<li class="d-flex gap-3 mr-auto">
  <img class="w-20 h-20 rounded-full mr-auto" src={javascripte} ></img>
  <h1 class="display-4 text-center"><strong>JavaScript</strong></h1></li>

<li class="d-flex gap-3 mr-auto">
  <img class="w-20 h-20 rounded-full mr-auto" src={javalogo} ></img>
  <h1 class="display-4 text-center"><strong>Java</strong></h1></li>

<li class="d-flex gap-3 mr-auto">
  <img class="w-20 h-15 rounded-full mr-auto" src={clogo} ></img>
  <h1 class="display-4 text-center"><strong>C Sharp (C#)</strong></h1></li>


</figure>





<figure onMouseEnter={textEnter} onMouseLeave={textLeave} class="d-flex flex-column  gap-2 drop-shadow-4xl transition hover:backdrop-blur-md hover:scale-100 scale-95 rounded-lg p-8 bg-opacity-10 bg-slate-200 backdrop-blur-sm	" style={{width: "480"}}>
  <li class="d-flex gap-5 mr-auto">
  <img class="w-20 h-20 rounded-full mr-auto" src={logo}></img>
  <h1 class="display-3 text-center"><strong>Sahib</strong></h1></li>

  <li class="d-flex flex-column gap-2">
  <Link class="rounded-full btn btn-danger" to="/Downloads" >Projects / Downloads</Link>
  <a class="rounded-full btn btn-primary" href="https://discord.com/users/772047297961525269" target="_blank" >Discord</a>
  <a class="rounded-full btn btn-primary" href="https://github.com/blackysh" target="_blank" >Github</a>
  <a class="rounded-full btn btn-primary" href="https://youtube.com/@sahibb" target="_blank" >Youtube</a>
  </li>
</figure>
      
</div>

<motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      /> 
    </div>


  );
};
  
export default Home;