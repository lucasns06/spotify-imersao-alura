import "./Main.css";
import { Link } from 'react-router-dom';
import { useCategory } from "../CategoriesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
    const { categories, setSelectedCategory } = useCategory();
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    {/* <h1 id="greeting">Boas vindas</h1> */}
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {categories.map((item) => (
                                <Link to="musica" className={`cards ${item.cor}`} alt="card" key={item.id} onClick={() => setSelectedCategory(item)}  >
                                    <div className="cards">
                                        <img src={item.img} alt="" />
                                        <span>{item.span}</span>
                                    </div>
                                </Link>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" alt="artist"/>
                            <div className="play">
                                <span><FontAwesomeIcon icon={faPlay} /></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href="/" alt="artist">
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
