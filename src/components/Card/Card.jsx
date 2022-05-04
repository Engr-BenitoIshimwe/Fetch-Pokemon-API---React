import React from "react";
import { getPokemonSpriteUrl } from '../../api/utils';
import './style.css';
function Card({pokemonIndex}) {
 return (
  <div >
   <img src= {getPokemonSpriteUrl(pokemonIndex)} alt="" />
  </div>
 );
}

export default Card;