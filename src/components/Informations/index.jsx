import './styles.css'

import poke from '../../images/pokeball.png'

export default function Informations({ NAME, XP, HGT, WGT, TYP }) {
    return (
        <>
            <div className='container-information'>
                <div className='container-titulo-stats'> 
                    <div className='titulo-adjust'>
                        --------
                    </div>
                    <h1>INFORMATIONS</h1>
                    <div className='titulo-adjust'>
                        --------
                    </div>
                </div>

                <div className='container-submenu-information'>
                    <div className="subcontainer-information">
                        <div>
                            NAME
                        </div>
                        <div>
                            {NAME}
                        </div>
                    </div>

                    <div className="subcontainer-information">
                        <div>
                            BASE XP
                        </div>
                        <div>
                            {XP} XP
                        </div>
                    </div>

                    <div className="subcontainer-information">
                        <div>
                            HEIGHT
                        </div>
                        <div>
                            {HGT}
                        </div>
                    </div>

                    <div className="subcontainer-information">
                        <div>
                            WEIGHT
                        </div>
                        <div>
                            {WGT} LBS
                        </div>
                    </div>

                    <div className="subcontainer-information">
                        <div>
                            TYPE
                        </div>
                        <div>
                            {TYP}
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