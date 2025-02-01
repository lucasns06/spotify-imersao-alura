import React from 'react';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className='header__search__container'>
                <div className="navigation">
                    <Link to="/">
                        <span><FontAwesomeIcon icon={faHome} className='header__home__icon' /></span>
                    </Link>
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
