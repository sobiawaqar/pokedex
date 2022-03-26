//const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle, out of many</p>
      <ul>
        {props.abilities.map((ability) => (
          <li>{ability}</li>
        ))}
      </ul>
    </div>
  );
};
export default BestPokemon;
