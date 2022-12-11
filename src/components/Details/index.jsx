import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router"
import { Link , NavLink } from "react-router-dom";
import axios from 'axios'
import './styles.css'
import PokemonCard from "../PokemonCard";
import Stats  from "../Stats";
import Informations from "../Informations";
import Moves from "../Moves";

export const Details = () => { 
    const { id } = useParams();
    const [pokemons, setPokemons] = useState();
    const [stats, setStats] = useState(true);
    const [informations, setInformations] = useState(false);
    const [moves, setMoves] = useState(false);

    function handleClickStats() {
        setStats(true);
        setInformations(false);
        setMoves(false);
    }

    function handleClickInformations() {
        setStats(false);
        setInformations(true);
        setMoves(false);
    }

    function handleClickMoves() {
        setStats(false);
        setInformations(false);
        setMoves(true);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => setPokemons(res.data))
            .catch((err) => console.log(err));
            console.log(pokemons)
    };

    return (
    <>
        <div>
            
            {pokemons && (
                <>
                    <div className="container-main">
                        <div className="details-container">
                            <div className="img-container">
                                <div className="voltar-container">
                                    <Link className="link-styles" to='/'>VOLTAR</Link>
                                </div>
                                <div className="container-area-img">
                                    <div className="pokemon-titulo">
                                        <div className="pokemon-name">
                                            <div className="pokemon-name-edit">
                                                {pokemons.name}
                                            </div>
                                            <div className="pokemon-status-edit">
                                                {pokemons.types[0].type.name}
                                            </div>
                                        </div>
                                        <div className="pokemon-id">
                                            # {pokemons.id}
                                        </div>
                                    </div>
                                    <div className="details-img">
                                        <img src={pokemons.sprites.front_default} width="250px" height="250px"/>           
                                    </div>
                                </div>
                            </div>

                            <div className="informations-container">
                                <div className="menu-stats-container">       
                                    <div className="menu-container">
                                        <button
                                            className="btn"
                                            type="button"
                                            onClick={handleClickStats}         
                                        >
                                            STATS
                                        </button>

                                        <div>|</div>

                                        <button
                                            className="btn"
                                            type="button"
                                            onClick={handleClickInformations}         
                                        >
                                            INFORMATIONS
                                        </button>

                                        <div>|</div>

                                        <button
                                            className="btn"
                                            type="button"
                                            onClick={handleClickMoves}         
                                        >
                                            MOVES
                                        </button>
                                    </div>
                                </div>

                                

                                <div className="sub-menu-main">
                                    <div className="sub-menu-container">
                                        {stats && (    
                                            <Stats 
                                                HP={pokemons.stats[0].base_stat}
                                                ATK={pokemons.stats[1].base_stat}
                                                DEF={pokemons.stats[2].base_stat}
                                                SPATK={pokemons.stats[3].base_stat}
                                                SPDEF={pokemons.stats[4].base_stat}
                                                SPD={pokemons.stats[5].base_stat}
                                            />  
                                        )}
                                        {informations && (                       
                                            <Informations 
                                                NAME={pokemons.name}
                                                XP={pokemons.base_experience}
                                                HGT={pokemons.height}
                                                WGT={pokemons.weight}
                                                TYP={pokemons.types[0].type.name}
                                            />                                           
                                        )}   
                                        {moves && (                                          
                                            <Moves 
                                                Moves1={pokemons.moves[1].move.name}
                                                Moves2={pokemons.moves[2].move.name}
                                                Moves3={pokemons.moves[3].move.name}
                                                Moves4={pokemons.moves[4].move.name}
                                                Moves5={pokemons.moves[5].move.name}
                                                Moves6={pokemons.moves[6].move.name}
                                                Moves7={pokemons.moves[7].move.name}
                                                Moves8={pokemons.moves[8].move.name}
                                            />          
                                        )}
                                    </div>  
                                </div>                       
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    </>
    )
}