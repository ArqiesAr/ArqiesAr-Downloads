import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './bg.css';
import { useState } from "react";
import { Card } from "./CARD";
import axios from 'axios';

async function getData(){
    var response = await fetch('https://api.github.com/users/ArqiesAr/repos')

    var result = await response.json()
    return result
}

function CardList() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
          const result = await axios.get('https://api.github.com/users/ArqiesAr/repos');
          setData(result.data);
        }
        fetchData();
      }, []);

    

    return (
    <li id='list' class="d-flex flex-wrap justify-content-center cardlol gap-4">
    
    {data.map(repository => (
        
        <Card name={repository.name} description={repository.description}/>
        
      ))}
    
    
    </li>
    )

}

export {CardList}