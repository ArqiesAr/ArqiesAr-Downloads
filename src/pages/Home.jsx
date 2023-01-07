import React from "react";
import backgrounde from "./images/bg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ProgressBar } from "react-bootstrap";
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Cards from "./CARDS";
const Home = () => {
  return (
    <div class="">
      <title>Sahib's Applications</title>
      <div class="btn-group d-flex" role="group" aria-label="Basic example">
      <a class="btn-secondary btn" href="https://github.com/Blackysh" target="_blank">Github</a>
      <a class="btn-secondary btn" href="https://www.youtube.com/@sahibb" target="_blank">Youtube</a>
      <a class="btn-secondary btn" href="https://discord.com/users/772047297961525269" target="_blank">Discord</a>
      <a class="btn-secondary btn" href="https://open.spotify.com/user/31f5d2yg3lc75car3n6rmq22ygqe?si=b51dde3884014ff5" target="_blank">Spotify</a>
      <a class="btn-secondary btn" href="https://stackoverflow.com/users/20621348/sahib?tab=profile" target="_blank">StackOverflow</a>
      <a class="btn-secondary btn" href="https://twitter.com/Blackysh21" target="_blank">Twitter</a>
      </div>


      <Cards />
     
  

      



    </div>


  );
};
  
export default Home;