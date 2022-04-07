import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();

function App() {
  function logWhenClicked() {
   console.log("Button was clicked!");
  }
  return (
    <div>
      <header>
        <Logo appName="Pokedex" name1="Sobia" handleClick={logWhenClicked}/>
        <BestPokemon abilities={abilities} />
        <CaughtPokemon dateInput={date}/>
        <PokemonMoves />
        <PokemonMovesSelector/>
        <PokemonCity/>
      </header>
    </div>
  );
}

export default App;
