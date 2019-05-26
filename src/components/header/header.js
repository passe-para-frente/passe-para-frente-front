import React from 'react';

const Header = (props) => {
    return (
        <header className="pf-header">
            <nav className="pf-menu">
                <a href="/">
                    Passe para Frente
                </a>
                <div className="pf__menu-mobile" onClick={props.openMenu}>
                    <div className="pf__menu-mobile-bar"></div>
                    <div className="pf__menu-mobile-bar"></div>
                    <div className="pf__menu-mobile-bar"></div>
                </div>
                <ul className="pf-profile">
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Perfil</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;