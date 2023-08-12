import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

import Download from './Download'


const Home = () => {


  return (
    <div class="d-flex flex-column bgcolor gap-3 justify-content-center">
      <title>Sahib's Applications</title>
      <div class="btn-group d-flex m-3 justify-content-center" role="group" aria-label="Basic example" >
      </div> 

<figure class="d-flex dl-page flex-column gap-0 p-1 bg-opacity-100 backdrop-blur-sm	" style={{maxWidth: "100%", minWidth:'100%'}}>
  <h1 class="display-3 text-center"><strong>Want to see any of my projects?</strong></h1>
  <Download/>
</figure>
</div>




  );
};
  
export default Home;