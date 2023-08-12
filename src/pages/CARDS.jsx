import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './bg.css';

import { CardList } from "./CARDgit";

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
      <div class="text-white p-24 d-flex flex-column justify-content-center align-content-center gap-4" style={{minHeight: '95%'}}>



  <input name="search" id="search" data-search onChange={search} class='serechbar transition drop-shadow-2xl ring-white	outline-gray-900 bg-slate-800 rounded-lg p-2 dark:bg-slate-800k bg-opacity-10 bg-slate-200' placeholder={"Search applications"}></input>


      <CardList></CardList>


      </div>
    );}


export default Cards