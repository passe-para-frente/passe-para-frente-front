import React from 'react'
import facebook from '../../images/fb.png'
import cades from '../../images/logocades.png'
import instagram from '../../images/insta.png' 

const Footer = () => {
    return (
        <footer>
            <h3>Realização:</h3>
            <div className="icons">
                <a href="https://www.institutocades.com.br/"><img src={cades} alt="Logo do instituto Cades" /></a>
                <a href="https://www.facebook.com/cades/"><img src={facebook} alt=" Logo do Facebook" /></a>
                <a href="https://www.instagram.com/institutocades/"><img src={instagram} alt="logo do instagram" /></a>
            </div>
        </footer>

    )
}

export default Footer
