import { useMemo, useState } from "react";
import { List } from "./List";

export interface Pokemons {
  name: string;
}

const INITIAL_STATE = ["Bulbasaur", "Charmander", "Squirtle"];

function App() {
  const [pokemons, setPokemons] = useState(INITIAL_STATE);

  const [input, setInput] = useState("");

  const QuantidadePokemons = useMemo(() => {
    for (let index = 0; index < 3000000000; index++) {}
    console.log("QuantidadePokemons......");
    return pokemons.length;
  }, [pokemons]);

  const QtdPokemons = QuantidadePokemons;

  return (
    <div className="App">
      <h3>POKEMONS - QTD: {QtdPokemons}</h3>
      <List pokemons={pokemons} />

      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => setPokemons([...pokemons, input])}>
          Adicionar novo pokemon
        </button>
      </div>
    </div>
  );
}

export default App;
