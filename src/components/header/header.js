import React from 'react';

const Header = () => {
    return (
        <header className="pf-header">
            <nav className="pf-menu">
                <a href="/">
                    Passe para Frente
                </a>
                <ul className="pf-profile">
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Perfil</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;