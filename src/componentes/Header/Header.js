import React from 'react';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className='header__search__container'>
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeft} alt="Seta esquerda" />
                    </button>
                    <button className="arrow-right">
                        <img src={smallRight} alt="Seta direita" />
                    </button>
                </div>
                <div className="header__search">
                    <img src={search} alt="Buscar" />
                    <input
                        id="search-input"
                        maxLength="800"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        placeholder="O que você quer ouvir?"
                    />
                </div>
            </div>
            <div className="header__login">
                <button className="subscribe">
                    <span><FontAwesomeIcon icon={faArrowDown} /></span>
                    Instalar aplicativo
                </button>
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;
