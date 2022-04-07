//const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle, out of many</p>
      <ul>
        {props.abilities.map((ability) => (
          <li key={ability}>{ability}</li> //When render a list, each item needs a unique key
        ))}
      </ul>
    </div>
  );
};
export default BestPokemon;
