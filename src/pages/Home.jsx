import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carregamento } from '../components/Carregamento'
import PokemonCard from '../components/PokemonCard'
import './styles.css'

export const Home = () => {
    const [pokemons, setPokemons] = useState ([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 100; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.toLowerCase().includes(name.toLowerCase())) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    };


    return (
        <>
            <div className='navbar'>
                <div>
                    Pokemon
                </div>
                <input
                    onChange={(e) => pokemonFilter(e.target.value)}
                ></input>
            </div>
                 
            <div className='container'> 
                <div className='container--poke'>
                    {pokemons.length === 0 ? (
                        <Carregamento/> 
                    ) : (
                        pokemons.map((pokemon) => (
                            <div classname="container--poke" >
                                <PokemonCard 
                                    name={pokemon.data.name} 
                                    image={pokemon.data.sprites.front_default} 
                                    types={pokemon.data.types} 
                                    abilities={pokemon.data.abilities}
                                    id={pokemon.data.id}
                                    key={pokemon.id}
                                    pokemon={pokemon}
                                />                   
                            </div>                
                        ))
                    )}
                </div>        
            </div>
        </>
    )
}