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
const Home = () => {
  return (
    <div class="">
      <title>Sahib's Applications</title>
      <div class="btn-group d-flex" role="group" aria-label="Basic example" >
      </div> 
      <div class="d-flex justify-content-center flex-column p-5">
      <h1 class="display-2 text-center text-info">
       <strong> <b> Hi, I am Sahib! </b> </strong>
      </h1> 
      <p class="display-5 text-center"><em>
      Hey there, my name is Sahib and I'm a programmer/developer!
      </em></p>
      <p class="display-5 text-center"><em>
      I mostly create desktop applications and websites, 
      </em></p>
      <p class="display-5 text-center"><em>
      but I can develop other types of software. Like  bots, mobile apps, servers, etc. 
      </em></p>
      </div>
     
      
<div class="d-flex flex-wrap justify-content-center gap-10 ">




<figure class="d-flex flex-column drop-shadow-4xl bg-slate-800 rounded-xl p-8 dark:bg-slate-800k bg-opacity-60" style={{width: "480"}}>
<li class="d-flex gap-5 mr-auto">
  <img class="w-20 h-20 rounded-full mr-auto" src={pythonlogo} ></img>
  <h1 class="display-4 text-center"><strong>Python</strong></h1></li>
  
<li class="d-flex gap-5 mr-auto">
  <img class="w-20 h-20 rounded-full mr-auto" src={javascripte} ></img>
  <h1 class="display-4 text-center"><strong>JavaScript</strong></h1></li>

<li class="d-flex gap-5 mr-auto">
  <img class="w-20 h-20 rounded-full mr-auto" src={javalogo} ></img>
  <h1 class="display-4 text-center"><strong>Java</strong></h1></li>

<li class="d-flex gap-5 mr-auto">
  <img class="w-20 h-20 rounded-full mr-auto" src={clogo} ></img>
  <h1 class="display-4 text-center"><strong>C Sharp (C#)</strong></h1></li>


</figure>





<figure class="d-flex flex-column gap-2 drop-shadow-4xl bg-slate-800 rounded-xl p-8 dark:bg-slate-800k bg-opacity-60" style={{width: "480"}}>
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


    </div>


  );
};
  
export default Home;