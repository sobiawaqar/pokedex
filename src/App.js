import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
function App() {
  return (
    <div>
      <header>
        <Logo appName="Pokedex" name1="Sobia"/>
        <BestPokemon abilities={abilities} />
        <CaughtPokemon dateInput={date}/>
      </header>
    </div>
  );
}
export default App;
