import React, {Fragment} from 'react'
import Mao from '../../images/mao.png'
import Bola from '../../images/bola-icon.png'
import Livro from '../../images/livro-icon.png'
import Computer from '../../images/computer-icon.png'


const HowToDonate = () => {
    return (
        <Fragment>
        <div className="detail-separator">

            <div className="separator-img">
                <img src={Mao} alt="" />
            </div>
            <div className="separator"></div>
        </div>
        <div className="detail-what-donate">
            <div className="text">
                <h2>O que posso doar?</h2>
                <p>Todo tipo de material esportivo, livro ou equipamentos de informática em condições de uso.</p>
                <div className="detail-icons">
                    <div className="icon">
                        <img src={Bola} alt="" />
                    </div>
                    <div className="icon">
                        <img src={Livro} alt="" />
                    </div>
                    <div className="icon">
                        <img src={Computer} alt="" style={{width: "60px"}} />
                    </div>
                </div>
                <strong className="list-materials">Clique aqui para a lista completa de possibilidades para doação.</strong>
            </div>
        </div>
        </Fragment>
    )
}

export default HowToDonate