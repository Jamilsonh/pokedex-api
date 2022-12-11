import './styles.css'

import poke from '../../images/pokeball.png'

export default function Moves({ Moves1, Moves2, Moves3, Moves4, Moves5, Moves6, Moves7, Moves8 }) {
    return (
        <>
            <div className='container-moves'>   
                <div className='container-titulo-stats'> 
                    <div className='titulo-adjust'>
                        ----------------
                    </div>
                    <h1>MOVES</h1>
                    <div className='titulo-adjust'>
                        ----------------
                    </div>
                </div>

                <div className='subcontainer-submenu-moves'>                          
                    <div className='subcontainer-moves'>{Moves1}</div>
                    <div className='subcontainer-moves'>{Moves2}</div>
                    <div className='subcontainer-moves'>{Moves3}</div>
                    <div className='subcontainer-moves'>{Moves4}</div>
                    <div className='subcontainer-moves'>{Moves5}</div>
                    <div className='subcontainer-moves'>{Moves6}</div>
                    <div className='subcontainer-moves'>{Moves7}</div>
                    <div className='subcontainer-moves'>{Moves8}</div> 
                </div> 
                
                <div className='container-titulo-stats'> 
                    <div className='titulo-adjust'>
                        ---------
                    </div>
                    <img className='img-adjust' src={poke}/>
                    <div className='titulo-adjust'>
                        ---------
                    </div>
                </div>
            </div>
        </>
    )
}