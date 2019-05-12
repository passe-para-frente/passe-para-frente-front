import React from 'react';

const Header = () => {
    return (
        <header className="pf-header">
            <nav className="pf-menu">
                <a href="/">
                    Passe para Frente
                </a>
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