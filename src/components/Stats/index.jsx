import './styles.css'
import poke from '../../images/pokeball.png'

export default function Stats({ HP, ATK, DEF, SPATK, SPDEF, SPD }) {
    return (
        <>
                <div className="container-stats">
                    <div className='container-titulo-stats'> 
                        <div className='titulo-adjust'>
                            -----------------
                        </div>
                        <h1>STATS</h1>
                        <div className='titulo-adjust'>
                            -----------------
                        </div>
                    </div>

                    <div className="container-submenu-stats">
                        <div className="container-dados">
                            <div>
                                HP
                            </div>
                            <div>
                                {HP}
                            </div>
                        </div>

                        <div className="container-dados">
                            <div>
                                ATTACK
                            </div>
                            <div>
                                {ATK}
                            </div>
                        </div>

                        <div className="container-dados">
                            <div>
                                DEFENSE
                            </div>
                            <div>
                                {DEF}
                            </div>
                        </div>

                        <div className="container-dados">
                            <div>
                                SPECIAL-ATTACK
                            </div>
                            <div>
                                {SPATK}
                            </div>
                        </div>

                        <div className="container-dados">
                            <div>
                                SPECIAL-DEFENSE
                            </div>
                            <div>
                                {SPDEF}
                            </div>
                        </div>

                        <div className="container-dados">
                            <div>
                                SPEED
                            </div>
                            <div>
                                {SPD}
                            </div>
                        </div>
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