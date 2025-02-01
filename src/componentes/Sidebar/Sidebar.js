import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <Link to="/">
                        <img src={logoSpotify} alt="Logo" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span><FontAwesomeIcon icon={faBook} /></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Que tal seguir um podcast novo?</span>
                        <span className="text subtitle">Avisaremos você sobre novos episodios.</span>
                        <button className="section-playlist__button">
                            <span>Explore podcasts</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <Link to="/" alt="cookies">Cookies</Link>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;