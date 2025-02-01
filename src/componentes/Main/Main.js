import "./Main.css";
import Playlist1 from "../../assets/playlist/1.jpeg";
import Playlist2 from "../../assets/playlist/2.png";
import Playlist3 from "../../assets/playlist/3.jpeg";
import Playlist4 from "../../assets/playlist/4.jpeg";
import Playlist5 from "../../assets/playlist/5.jpeg";
import Playlist6 from "../../assets/playlist/6.jpeg";
import Playlist7 from "../../assets/playlist/7.jpeg";
import Playlist8 from "../../assets/playlist/8.jpeg";
import Playlist9 from "../../assets/playlist/9.jpeg";
import Playlist10 from "../../assets/playlist/10.jpeg";
import Playlist11 from "../../assets/playlist/11.jpeg";
import Playlist12 from "../../assets/playlist/12.jpeg";
import Playlist13 from "../../assets/playlist/13.jpeg";
import Playlist14 from "../../assets/playlist/14.jpeg";
import Playlist15 from "../../assets/playlist/15.jpeg";

const Main = () => {
    const cards = [
        {
            id: 1,
            img: Playlist1,
            span: 'Boas festas',
            cor: 'card1'
        },
        {
            id: 2,
            img: Playlist2,
            span: 'Feitos para você',
            cor: 'card2'
        },
        {
            id: 3,
            img: Playlist3,
            span: 'Lançamentos',
            cor: 'card3'
        },
        {
            id: 4,
            img: Playlist4,
            span: 'Creators',
            cor: 'card4'
        },
        {
            id: 5,
            img: Playlist5,
            span: 'Para treinar',
            cor: 'card5'
        },
        {
            id: 6,
            img: Playlist6,
            span: 'Podcasts',
            cor: 'card6'
        },
        {
            id: 7,
            img: Playlist7,
            span: 'Sertanejo',
            cor: 'card7'
        },
        {
            id: 8,
            img: Playlist8,
            span: 'Samba e pagode',
            cor: 'card8'
        },
        {
            id: 9,
            img: Playlist9,
            span: 'Funk',
            cor: 'card9'
        },
        {
            id: 10,
            img: Playlist10,
            span: 'MPB',
            cor: 'card10'
        },
        {
            id: 11,
            img: Playlist11,
            span: 'Rock',
            cor: 'card11'
        },
        {
            id: 12,
            img: Playlist12,
            span: 'Hip Hop',
            cor: 'card12'
        },
        {
            id: 13,
            img: Playlist13,
            span: 'Indie',
            cor: 'card13'
        },
        {
            id: 14,
            img: Playlist14,
            span: 'Relax',
            cor: 'card14'
        },
        {
            id: 15,
            img: Playlist15,
            span: 'Música Latina',
            cor: 'card15'
        },
        {
            id: 16,
            img: Playlist8,
            span: 'Samba e pagode',
            cor: 'card8'
        },
        {
            id: 17,
            img: Playlist9,
            span: 'Funk',
            cor: 'card9'
        },
        {
            id: 18,
            img: Playlist10,
            span: 'MPB',
            cor: 'card10'
        },
        {
            id: 19,
            img: Playlist11,
            span: 'Rock',
            cor: 'card11'
        },
        {
            id: 20,
            img: Playlist12,
            span: 'Hip Hop',
            cor: 'card12'
        },
        {
            id: 21,
            img: Playlist13,
            span: 'Indie',
            cor: 'card13'
        },
        {
            id: 22,
            img: Playlist14,
            span: 'Relax',
            cor: 'card14'
        },
        {
            id: 23,
            img: Playlist15,
            span: 'Música Latina',
            cor: 'card15'
        },
        {
            id: 24,
            img: Playlist13,
            span: 'Indie',
            cor: 'card13'
        },
    ];
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
                            {cards.map((item) => (
                                <a href="/" className={`cards ${item.cor}`} alt="card" key={item.id}>
                                    <div className="cards">
                                        <img src={item.img} alt="" />
                                        <span>{item.span}</span>
                                    </div>
                                </a>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href="">
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
