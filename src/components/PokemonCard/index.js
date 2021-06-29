import React from 'react';
import sortBy from 'lodash/sortBy';
import pokedex from '../../data/pokemon.json';
import './PokemonCard.css';

const sortedPokedex = sortBy(pokedex.pokemon, ['name']);
console.log(sortedPokedex);

function formatTypes(type) {
    return(
        <span className={`type ${type}`}>{type}</span>
    )
}

function formatEvolutions(evolution) {
    return (
        <span className='evolutions'>{evolution}</span>
    )
}

const PokemonCard = () => {
    return sortedPokedex.map(pokemon => {
        return (
            <div class='col mb-4'>
            <div class='card' key={pokemon.id}>
            <div className='fs-6 fw-lighter card-text text-end'>#{pokemon.id}</div>
              <img src={pokemon.img} className='card-img-top' alt={pokemon.name}/>
              <div className='card-body'>
                <h5 className='card-title text-center'>{pokemon.name}</h5>
                <p className='card-text text-center fw-light'>{pokemon.type.map(type => formatTypes(type))}</p>
                <p className='card-text fw-light fs-6'><span className='fw-bold'>Height:</span> {pokemon.height}<br/><span className='fw-bold'>Weight:</span> {pokemon.weight}</p>
                <p className='card-text fw-light'><span className='fw-bold'>Weaknesses:</span><br /> {pokemon.weaknesses.map(weakness => formatTypes(weakness))}</p>
                <p className='card-text fw-light fs-6'><span className='fw-bold'>Next Evolution:</span><br /> {pokemon.next_evolution ? pokemon.next_evolution.map(evolution => formatEvolutions(evolution.name)) : <span>No More Evolutions</span>}</p>
              </div>
            </div>
          </div>
        )
    })
}

const PokemonCardCollection = () => {
    return (
        <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
                <PokemonCard/>
	    </div>
    )
}

export default PokemonCardCollection;