import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import backgrounde from "./images/bg.jpg"
import "./bg.css";
import { ButtonGroup } from "react-bootstrap";



const Cards = () => {
    return (
      <div class="text-white p-5 ">
 <li class="d-flex flex-column gap-2">

 <div class="card bg-dark bg-opacity-75">
  <div class="card-body">
    <h5 class="card-title">Jumpcutter Android (InDev)</h5>
    <p class="card-text">Jumpcutter at 5x made for android</p>
    <li class="d-flex align-items-start mb-1 gap-1">
    <a href="https://blackysh.itch.io/" class="btn btn-primary">Download / Buy</a>
    <a href="https://www.youtube.com/@sahibb" target="_blank" class="btn btn-danger align-self-center ms-auto">Tutorial</a>
    </li>
  </div>
</div>

 <div class="card bg-dark bg-opacity-75">
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


 <div class="card bg-dark bg-opacity-75">
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
        
<div class="card bg-dark bg-opacity-75">
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
<div class="card bg-dark bg-opacity-75">
  <div class="card-body">
    <h5 class="card-title">AFS</h5>
    <p class="card-text">Command line tool to install and remove apt/flatpak/snap packages from one place.</p>
    <li class="d-flex align-items-start mb-1 gap-1">
    <a href="https://github.com/Blackysh/afs-apt-flatpak-snap/releases/tag/v1" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/afs-apt-flatpak-snap" target="_blank" class="btn btn-info">Github</a>
    <a href="https://www.youtube.com/watch?v=MvRxPc7FYJw" target="_blank" class="btn btn-danger align-self-center ms-auto">Tutorial</a>
    </li>
  </div>
</div>

<div class="card bg-dark bg-opacity-75">
  <div class="card-body">
    <h5 class="card-title">WEBSITE: Sahib's Applications</h5>
    <p class="card-text">THIS WEBSITE :/</p>
    <li class="d-flex align-items-start mb-1 gap-1">
    <a href="https://github.com/Blackysh/applications-list-website/releases/tag/tag" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/applications-list-website" target="_blank" class="btn btn-info">Github</a>
    <a href="https://youtube.com/@sahibb" target="_blank" class="btn btn-danger align-self-center ms-auto">Tutorial</a>
    </li>
  </div>
</div>
</li>
      </div>
    );}

export default Cards