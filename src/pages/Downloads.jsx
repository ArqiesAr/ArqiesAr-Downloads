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
  
<div class="d-flex justify-content-center flex-column align-items-center p-6 gap-1">


<div class='d-flex flex-wrap justify-content-center'>
<div class='d-flex flex-wrap justify-content-center npfpab  align-items-center gap-10'>
<a href="https://myshop.rocks/giveaways/Blackysh" target="_blank"><img className='pfp' src={pfp}></img></a>
<div className="d-flex flex-column justify-content-center ">
<h1 class='name'>Sahib / Blackysh</h1>
<p className="aboutme text-center ">Hi, I am Sahib, also known as Blackysh. I am a software developer who lives in India. I am constantly learning new things and like working on new and unique projects, while improving and expanding my knowledge of different things. </p>
</div>
</div>

</div>

<div class='d-flex flex-column justify-content-center gap-0'>
<li class="d-flex medialist flex-wrap gap-4 flex-warp align-items-center justify-items-center justify-content-center gap-0">
    
    <a href="https://discord.gg/zxKNWk8ANE" target="_blank" ><img class="testcolor"src={dc} ></img></a>
    
    <a href="mailto: blackyshhi@gmail.com" target="_blank" ><img class="testcolor"src={mail} ></img></a>
    <a href="https://github.com/blackysh" target="_blank" ><img class="testcolor"src={git} ></img></a>
    <a href="https://www.instagram.com/s4h1b._/" target="_blank"><img class="testcolor"src={insta} ></img></a>
    <a href="https://pinterest.com/blackyshhi/" target="_blank"><img class="testcolor"src={pin} ></img></a>
    <a href="https://www.reddit.com/user/No-Priority1503/" target="_blank"><img class="testcolor"src={red} ></img></a>
  
    <a href="https://open.spotify.com/user/31f5d2yg3lc75car3n6rmq22ygqe?si=7547e0241d0c44b2"target="_blank" ><img class="testcolor"src={spoti} ></img></a>

    <a href="https://twitter.com/Blackysh21" target="_blank"><img class="testcolor"src={twit} ></img></a>
    <a href="https://www.youtube.com/@Sahibb" target="_blank"><img class="testcolor"src={youtube} ></img></a>

</li>
</div>


</div>

  
  
  
  );
};
  
export default Downloads;