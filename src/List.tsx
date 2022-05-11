export const List = ({ pokemons }: { pokemons: Array<string> }) => {
  return (
    <div>
      <ul>
        {pokemons.map((pokemon, idx) => (
          <li key={idx}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};
