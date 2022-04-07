//const date = new Date().toLocaleDateString();
import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const[caught, setCaught]= useState([]);
  const catchPokemon=()=>{
    const names = ["a", "b", "c"];
     setCaught(caught.concat(names[Math.floor(Math.random() * 3)]));
  };
    return (
      <div>
        <p>Caught {caught.length} Pokemon on {props.dateInput}</p>
        <button onClick={catchPokemon} >Caught Pokemon</button>
         <ul>
          {caught.map((item, index)=> {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  };
  export default CaughtPokemon;

