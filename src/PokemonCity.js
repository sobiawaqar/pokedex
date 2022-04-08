import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
function updateCity(event){
setCity(event.target.value.toLowerCase());
}
  return (
    <div>
          <form>
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={updateCity}
      />
      </form>
      <p>WELCOME to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
