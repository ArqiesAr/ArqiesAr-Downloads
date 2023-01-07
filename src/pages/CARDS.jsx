import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import backgrounde from "./images/bg.jpg"
import "./bg.css";
import { ButtonGroup } from "react-bootstrap";



const Cards = () => {
    return (
      <div class="text-white p-2" >
 <li>
 <div class="card bg-dark">
  <div class="card-body">
    <h5 class="card-title">CamControl</h5>
    <p class="card-text">Control your Computer using your hands with a camera.</p>
    <li class="btn-group">
    <a href="https://codeload.github.com/Blackysh/CamControl/zip/refs/heads/main" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/CamControl" target="_blank" class="btn btn-primary">Github</a>
    </li>
  </div>
</div>
        
<div class="card bg-dark">
  <div class="card-body">
    <h5 class="card-title">Remote Control Via Discord</h5>
    <p class="card-text">Remotely Control your computer by running this discord bot on it.</p>
    <li class="btn-group">
    <a href="https://codeload.github.com/Blackysh/Remote-Control-Via-Discord/zip/refs/heads/main" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/Remote-Control-Via-Discord" target="_blank" class="btn btn-primary">Github</a>
    </li>
  </div>
</div>
<div class="card bg-dark">
  <div class="card-body">
    <h5 class="card-title">AFS</h5>
    <p class="card-text">Command line tool to install and remove apt/flatpak/snap packages from one place.</p>
    <li class="btn-group">
    <a href="https://codeload.github.com/Blackysh/afs-apt-flatpak-snap/zip/refs/heads/master" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/afs-apt-flatpak-snap" target="_blank" class="btn btn-primary">Github</a>
    </li>
  </div>
</div>
</li>
      </div>
    );}

export default Cards