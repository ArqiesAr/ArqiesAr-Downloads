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
import websitea from './Website.png';
import Dektop from "./Desktop.png"
import anroid from './android.png'
import scipt from './Script.png'
import thiscord from './Discord.png'
// this is a javascript file btw :)

const hires = () => {
    return (
        <div className="d-flex flex-column">

        <h1 id="info" class="display-2 text-center text-success">
       <strong> <b>Hire me to get your own</b> </strong>
      </h1> 
      



        <div className="d-flex align-content-center align-items-center ">
        <div className="d-flex flex-wrap justify-content-center align-content-center align-items-center p-10 gap-20">

            


                <figure class="d-flex flex-column align-items-center gap-2 drop-shadow-4xl bg-slate-800 rounded-xl p-8 dark:bg-slate-800k bg-opacity-60" style={{width: "40%", minWidth:"480px"}}>
                <h1 class="display-3 text-center"><strong>Website </strong></h1>

                <img src={websitea} style={{'width': '480px'}}></img>

                <p class="text-center lead">I will create you a good looking website. Just like this one. Or an entirely different kind of website.</p>

                <li class="d-flex justify-content-center gap-2">
                <a href="https://www.fiverr.com/share/N615YV"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> ReactJS </button></a>
                <a href="https://www.fiverr.com/share/N615YV"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> Django  </button></a>
                </li>
                </figure>




                <figure class="d-flex flex-column gap-2 align-items-center drop-shadow-4xl bg-slate-800 rounded-xl p-8 dark:bg-slate-800k bg-opacity-60" style={{width: "40%", minWidth:"480px"}}>
                <h1 class="display-3 text-center"><strong>Desktop Software</strong></h1>

                <img src={Dektop} style={{'width': '480px'}}></img>
                <p class="text-center lead">I will create you a good looking and well functioning application. I will add whichever features you want and make sure you like the application.</p>

                <li class="d-flex justify-content-center gap-2">
                <a href="https://www.fiverr.com/share/2dzPdL"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> Python </button></a>
                <a href="https://www.fiverr.com/share/2dzPdL"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> Java </button></a>
                <a href="https://www.fiverr.com/share/2dzPdL"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> JavaScript </button></a>
                <a href="https://www.fiverr.com/share/2dzPdL"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> C#</button></a>
                
                </li>
                </figure>

                <figure class="d-flex flex-column gap-2 align-items-center drop-shadow-4xl bg-slate-800 rounded-xl p-8 dark:bg-slate-800k bg-opacity-60" style={{width: "40%", minWidth:"480px"}}>
                <h1 class="display-3 text-center"><strong>Discord Bot</strong></h1>


                
                <img src={thiscord} style={{'width': '480px'}}></img>
                <p class="text-center lead">I will create you a custom discord bot with your requested features.</p>

                <li class="d-flex justify-content-center gap-2">
                <a href="https://www.fiverr.com/share/gEW6jo"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> Python </button></a>
                <a href="https://www.fiverr.com/share/gEW6jo"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> JavaScript </button></a>

                </li>
                </figure>


                <figure class="d-flex flex-column gap-2 align-items-center drop-shadow-4xl bg-slate-800 rounded-xl p-8 dark:bg-slate-800k bg-opacity-60" style={{width: "40%", minWidth:"480px"}}>
                <h1 class="display-3 text-center"><strong>Android App</strong></h1>

                <img src={anroid} style={{'width': '480px'}}></img>
                <p class="text-center lead">I will create you a custom android application with requested features with any of the languages given below.</p>

                <li class="d-flex justify-content-center gap-2">
                <a href="https://www.fiverr.com/share/qPLBwZ"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> Python Kivy </button></a>
                <a href="https://www.fiverr.com/share/qPLBwZ"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> Java/Kotlin </button></a>
                <a href="https://www.fiverr.com/share/qPLBwZ"><button className="rounded-3xl text-slate-50 px-3 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> React Native </button></a>
                </li>
                </figure>
            
                <figure class="d-flex flex-column align-items-center gap-2 drop-shadow-4xl bg-slate-800 rounded-xl p-8 dark:bg-slate-800k bg-opacity-60" style={{width: "40%", minWidth:"480px"}}>
                <h1 class="display-3 text-center"><strong>Small Computer Script</strong></h1>

                <img src={scipt} style={{'width': '480px'}}></img>
                <p class="text-center lead">I will create you a python script to automate something or some small tool.</p>


                <li class="d-flex justify-content-center gap-2">
                <a href="https://www.fiverr.com/share/0RXYQA"><button className="rounded-3xl text-slate-50 px-20 ml-1 bg-gradient-to-r from-blue-900 to-blue-600 text-xl"> Python </button></a>
                </li>
                </figure>




        </div>
        </div>
        
        <a href="https://www.fiverr.com/users/blackysh/"><button className="rounded-3xl text-slate-50 px-5 ml-1 text-4xl bg-gradient-to-r from-cyan-600 to-blue-400 text-xl text-end justify-content-end " style={{position: 'fixed', bottom: '10px', right: '10px'}}>Hire(Fiverr)</button> </a>
        </div>


    );
};


export default hires;