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
import youtube from './images/youtube-symbol1.png'
import dc from './images/dc.png'
import spoti from './images/spoti.png'
import git from './images/git.png'
import twit from './images/Twit.png'
import insta from './images/insta.png'
import red from './images/red.png'
import pin from './images/pin.png'
import mail from './images/mail.png'

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
    <div class="home d-flex flex-column justify-content-center">
      <title>Sahib's Applications</title>
      <div class="btn-group d-flex m-3 justify-content-center" role="group" aria-label="Basic example" >
      </div> 
      
      <div class="d-flex justify-content-center flex-column gap-2 p-5">
        <a className='blender' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"><img onMouseEnter={textEnter} onMouseLeave={textLeave} className='blenderX' src={hello}></img></a>
       


      </div>
     

<div class='d-flex align-items-center justify-content-center'>
      <figure class="d-flex justify-self-center align-self-center dl-page flex-column gap-2 drop-shadow-4xl transition hover:backdrop-blur-lg rounded-lg p-4 bg-opacity-10 bg-slate-200 backdrop-blur-sm	" style={{maxWidth: '85%', minWidth:'80%'}}>

      <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="paragf fs-3"> 
      Sahib is one of the best programmers i know due to his exceptional skills, extensive knowledge, and the unwavering dedication.
  His passion for programming and development to excellence make him a highly sought-after programmer, capable of delivering innovative and high-quality solutions to complex problems. </p>
  <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="hesaidthat fs-2">~ Dark</p>


  <li class="d-flex flex-wrap gap-4 flex-warp align-items-center justify-items-center justify-content-center gap-0">
    
  <a href="https://discord.com/users/772047297961525269" target="_blank" ><img class="testcolor"src={dc} ></img></a>
  
  <a href="mailto: blackyshhi@gmail.com" target="_blank" ><img class="testcolor"src={mail} ></img></a>
  <a href="https://github.com/blackysh" target="_blank" ><img class="testcolor"src={git} ></img></a>
  <a href="https://www.instagram.com/s4h1b._/" target="_blank"><img class="testcolor"src={insta} ></img></a>
  <a href="https://pinterest.com/blackyshhi/" target="_blank"><img class="testcolor"src={pin} ></img></a>
  <a href="https://www.reddit.com/user/No-Priority1503/" target="_blank"><img class="testcolor"src={red} ></img></a>


  <a href="https://www.youtube.com/@Sahibb" target="_blank"><img class="testcolor"src={youtube} ></img></a>
  <a href="https://twitter.com/Blackysh21" target="_blank"><img class="testcolor"src={twit} ></img></a>
  
  <a href="https://open.spotify.com/user/31f5d2yg3lc75car3n6rmq22ygqe?si=7547e0241d0c44b2"target="_blank" ><img class="testcolor"src={spoti} ></img></a>
</li>



      </figure>
      </div>
<div class="d-flex flex-wrap flex-column align-content-center justify-content-center gap-2  ">



  <h1 class="display-4 text-center"><strong></strong></h1>



<figure class="d-flex dl-page flex-column gap-2 drop-shadow-4xl transition hover:backdrop-blur-lg rounded-lg p-8 bg-opacity-10 bg-slate-200 backdrop-blur-sm	" style={{maxWidth: "90%", minWidth:'80%'}}>
  <h1 class="display-3 text-center"><strong>Projects / Downloads</strong></h1>
  <Download/>
</figure>
<p class=''>Emoji template by <a href="https://hiftie.us">Hiftie</a></p>   
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