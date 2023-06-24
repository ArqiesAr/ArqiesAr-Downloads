import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import backgrounde from "./images/bg.jpg"
import { ButtonGroup } from "react-bootstrap";
import './bg.css';
import { getValue } from "@testing-library/user-event/dist/utils";


function search() {

  var i
  let input = document.getElementById('search').value
  input = input.toLowerCase();
  console.log(input)
  let x = document.querySelectorAll(".cord")
  console.log(x)

  for (i = 0 ; i < x.length; i++){
    var contains = x[i].innerHTML.toLowerCase().includes(input)

    x[i].classList.toggle('hide', !contains )
    
  }


}



const Cards = () => {
    return (
      <div class="text-white p-4 d-flex flex-column justify-content-center align-content-center gap-3" style={{minHeight: '95%'}}>



  <input name="search" id="search" data-search onChange={search} class='serechbar transition drop-shadow-2xl ring-white	outline-gray-900 bg-slate-800 rounded-lg p-2 dark:bg-slate-800k bg-opacity-10 bg-slate-200' placeholder={"Search applications"}></input>


<h2 class='name'> Actively Maintained, Updated or Checked   </h2>

<li id='list' class="d-flex flex-wrap justify-content-center cardlol gap-4">



<li class='cord'>
<div class="gap-2 animals  bg-slate-800 rounded-lg p-8 dark:bg-slate-800k bg-opacity-10 bg-slate-400" style={{'minWidth':'480px', 'maxWidth':'480px'}}>
  <div class="card-body">
    <h5 class="card-title">WEBSITE: This website</h5>
    <p class="card-text">THIS WEBSITE</p>
    <li class="d-flex align-items-start mb-1 gap-1">
    <a href="https://github.com/Blackysh/applications-list-website/releases/tag/tag" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/applications-list-website" target="_blank" class="btn btn-info">Github</a>
    <a href="https://youtube.com/@sahibb" target="_blank" class="btn btn-danger align-self-center ms-auto">Tutorial</a>
    </li>
  </div>
</div>
</li>







</li>



<h2 class='name'> Not maintained but working or will fix <h6>(if reported as broken)</h6> </h2>
<li id='list' class="d-flex flex-wrap justify-content-center cardlol gap-4">
<li class='cord'>
 <div class="gap-2 animals bg-slate-800 rounded-lg p-8 dark:bg-slate-800k bg-opacity-10 bg-slate-400" style={{'minWidth':'480px', 'maxWidth':'480px'}}>
  <div class="card-body">
    <h5 class="card-title">FFmpegKit Python Android</h5>
    <p class="card-text">Run FFmpeg on android using python (kivy)</p>
    <li class="d-flex align-items-start mb-1 gap-1">
    <a href="https://github.com/Blackysh/ffmpeg-kit-python/releases/tag/tag" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/ffmpeg-kit-python" target="_blank" class="btn btn-info">Github</a>
    <a href="https://www.youtube.com/watch?v=F8yJwRof948" target="_blank" class="btn btn-danger align-self-center ms-auto">Tutorial</a>
    </li>
  </div>
</div>
</li>


<li class='cord'>
 <div class="gap-2 animals  bg-slate-800 rounded-lg p-8 dark:bg-slate-800k bg-opacity-10 bg-slate-400" style={{'minWidth':'480px', 'maxWidth':'480px'}}>
  <div class="card-body ">
    <h5 class="card-title">CamControl</h5>
    <p class="card-text">Control your Computer using your hands with a camera.</p>
    <li class="d-flex align-items-start  mb-1 gap-1">
    <a href="https://codeload.github.com/Blackysh/CamControl/zip/refs/heads/main" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/CamControl" target="_blank" class="btn btn-info">Github</a>
    <a href="https://www.youtube.com/watch?v=DZ6u0nQrk48&t=3s" target="_blank" class="btn btn-danger align-self-center ms-auto">Tutorial</a>
    </li>
  </div>
</div>
</li>

<li class='cord'>
<div class="gap-2 animals bg-slate-800 rounded-lg p-8 dark:bg-slate-800k bg-opacity-10 bg-slate-400" style={{'minWidth':'480px', 'maxWidth':'480px'}}>
  <div class="card-body">
    <h5 class="card-title">Remote Control Via Discord</h5>
    <p class="card-text">Remotely Control your computer by running this discord bot on it.</p>
    <li class="d-flex align-items-start mb-1 gap-1">
    <a href="https://codeload.github.com/Blackysh/Remote-Control-Via-Discord/zip/refs/heads/main" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/Remote-Control-Via-Discord" target="_blank" class="btn btn-info">Github</a>
    <a href="https://www.youtube.com/watch?v=VQK_wKtwSkA" target="_blank" class="btn btn-danger align-self-center ms-auto">Tutorial</a>
    </li>
  </div>
</div>
</li>

</li>


<h2 class='name'> Broken, Unsupported or Ignored<h6>(This is here for archival purposed only*)</h6> </h2>
<li id='list' class="d-flex flex-wrap justify-content-center cardlol gap-4">

<li class='cord'>
 <div class="gap-2 animals bg-slate-800 rounded-lg p-8 dark:bg-slate-800k bg-opacity-10 bg-slate-400" style={{'minWidth':'480px', 'maxWidth':'480px'}}>
  <div class="card-body">
    <h5 class="card-title">Video2Short</h5>
    <p class="card-text">Convert a video to a 9:16 short easily!</p>
    <li class="d-flex align-items-start align-self-bottom  mb-1 gap-1">
    <a href="https://github.com/Blackysh/Video2Short/releases/tag/v1" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/Video2Short" target="_blank" class="btn btn-info">Github</a>
    <a href="https://www.youtube.com/@sahibb" target="_blank" class="btn btn-danger align-self-center ms-auto">Tutorial</a>
    </li>
  </div>
</div>
</li>

<li class='cord'>
 <div class="gap-2 animals  bg-slate-800 rounded-lg p-8 dark:bg-slate-800k bg-opacity-10 bg-slate-400"style={{'minWidth':'480px', 'maxWidth':'480px'}}>
  <div class="card-body">
    <h5 class="card-title">Jumpcutter Android</h5>
    <p class="card-text">Jumpcutter at 5x made for android</p>
    <li class="d-flex align-items-start mb-1 gap-1">
    <a href="https://blackysh.itch.io/" class="btn btn-danger">Download / Buy</a>
    </li>
  </div>
</div>
</li>


</li>



      </div>
    );}


export default Cards