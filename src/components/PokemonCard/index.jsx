import './styles.css'
import poke from '../../images/pokeball.png'

import { Link } from 'react-router-dom';

export default function PokemonCard({ name, image, types, id, abilities, showLink = true }) {
    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    }

    const abilitiesHandler = () => {
        if (abilities[1]) {
            return abilities[0].ability.name + " | " + '\n' + abilities[1].ability.name;
        }
        return abilities[0].ability.name;
    }

    return (
        <div className="card">
            <div className='sub-card'>
                <div className='img-container'>
                    <img src={image} width="120px" alt="oi" />
                </div>
                <div className='title-container'>
                    
                    <div className='title'>
                        <img className='img-poke' src={poke} width="10px"/>
                        {name}  
                        <img className='img-poke2' src={poke} width="10px"/>     
                    </div>

                    <div className='types-abilities'>   
                        <div className='types-container'>
                            <div className='adjust'>
                                Types
                            </div>
                            <div className='adjust'>
                                Abilitys
                            </div>   
                        </div>
                        
                        <div className='abilitys-container'>
                            <div className='adjust'>
                                {typeHandler()}       
                            </div>
                            <div className='adjust'>
                                {abilitiesHandler()}       
                            </div>
                        </div>
                    </div>

                    <div>
                        {showLink && <Link className='link' to={`/poke/${id}`}>Detalhes</Link>}
                    </div>      
                </div>
                
            </div>
        </div>
    )
};

