import React, { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDescription } from './api/utils';
import Select from './components/Select';
import Card from './components/Card/Card';

async function logData() {
  const list = await getPokemonList();
  console.log(list);

  const pokemon = await getPokemonDescription();
  console.log(pokemon);
}

logData();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState('');

  useEffect(() => {
    async function getData() {
      const apiData = await getPokemonList();

      setPokemonList(apiData);
    }
    getData();
  }, []);

  const pokemonNames = pokemonList.map((pokemon, idx) => {
    // console.log(pokemon.name);
    return (
      // <option key={idx} value={pokemon.name}>
      <option key={idx} value={idx + 1}>
        {pokemon.name}
      </option>
    );
  });

  return (
    <div className='app'>
      {/* <Select onChange={(e) => console.log(e.target.value)}> */}
      <Select onChange={(e) => setPokemonIndex(e.target.value)}>
        {pokemonNames}
      </Select>
      <Card pokemonIndex={pokemonIndex} />
    </div>
  );
}
