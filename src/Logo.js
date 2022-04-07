//const appName = "Sobia Waqar's Pokedex";
const Logo = (props) => {
  console.log(props);
  //function logWhenClicked() {
   // console.log("Button was clicked!");
   //}
    return (
      <div>
        <h1> Welcome to the CYF's {props.appName}{props.name1}</h1>
        <img onClick={props.handleClick} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pokedex">
        </img>
      </div>
    );
        };

export default Logo;
