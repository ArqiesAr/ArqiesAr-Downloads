import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import backgrounde from "./images/bg.jpg"
import { ButtonGroup, Card } from "react-bootstrap";
import Cards from "./CARDS"
import pfp from './images/logopfp.png'
import './avt.css'
import youtube from './images/youtube-symbol1.png'
import dc from './images/dc.png'
import spoti from './images/spoti.png'
import git from './images/git.png'
import twit from './images/Twit.png'
import insta from './images/insta.png'
import red from './images/red.png'
import pin from './images/pin.png'
import mail from './images/mail.png'

const Downloads = () => {
  return (
  
<div class="d-flex justify-content-center flex-column align-items-center p-6 gap-">


<div class='d-flex flex-wrap justify-content-center align-items-center'>
<div class='d-flex flex-wrap justify-content-center npfpab  align-items-center gap-7'>
<a href="https://arqies.com" target="_blank"><img className='pfp' src={pfp}></img></a>
<div className="d-flex flex-column justify-content-center ">
<h1 class='name'>Arqies </h1>
<p className="aboutme text-center ">Hi, I am Arqies. I am a software developer who lives in India. I am constantly learning new things and like working on new and unique projects, while improving and expanding my knowledge of different things. </p>
</div>

</div>

</div>


<div class='d-flex flex-column justify-content-center gap-0'>
<li class="d-flex medialist flex-wrap gap-4 flex-warp align-items-center justify-items-center justify-content-center gap-0">
    
    <a href="https://discord.arqies.com" target="_blank" ><img class="testcolor"src={dc} ></img></a>
    
    <a href="mailto: contact@arqies.com" target="_blank" ><img class="testcolor"src={mail} ></img></a>
    <a href="https://github.arqies.com" target="_blank" ><img class="testcolor"src={git} ></img></a>
    <a href="https://instagram.arqies.com" target="_blank"><img class="testcolor"src={insta} ></img></a>
  
    <a href="https://spotify.arqies.com"target="_blank" ><img class="testcolor"src={spoti} ></img></a>

    <a href="https://twitter.arqies.com" target="_blank"><img class="testcolor"src={twit} ></img></a>
    <a href="https://youtube.arqies.com" target="_blank"><img class="testcolor"src={youtube} ></img></a>

</li>
<a href="https://ko-fi.com/arqies" class='text-white text-center'><button class="donate bg-slate-600 rounded-lg text-white "> Buy a coffee for me  </button></a>

</div>

</div>

  
  
  
  );
};
  
export default Downloads;