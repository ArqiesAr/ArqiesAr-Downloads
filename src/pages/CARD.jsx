import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './bg.css';


function Card({ name, description }) {

    return (

        <li class='cord'>
        <div class="gap-2 animals  bg-slate-800 rounded-lg p-8 dark:bg-slate-800k bg-opacity-10 bg-slate-400" style={{'minWidth':'360px', 'maxWidth':'360px', 'maxHeight':'6000px'}}>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <li class="d-flex align-items-start mb-1 gap-1">
            <a href={"https://github.com/arqies/"+ name} target="_blank" rel='noreferrer' class="btn btn-dark" style={{width: '100%'}}>Github</a>
            </li>
          </div>
        </div>
        </li>

    );
  }






export {Card}