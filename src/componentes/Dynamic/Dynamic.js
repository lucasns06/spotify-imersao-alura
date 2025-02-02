import { useEffect } from 'react';
import { useCategory } from '../CategoriesContext';
import { useNavigate } from 'react-router-dom';
import './Dynamic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const Dynamic = () => {
    const { selectedCategory } = useCategory();
    const navigate = useNavigate();
    useEffect(() => {
        if (!selectedCategory) {
            navigate('/');
        }
    }, [selectedCategory, navigate]);

    if (!selectedCategory) return null;

    const artists = [
        {
            "id": 1,
            "name": "Foo Fighters",
            "genre": "Rock",
            "urlImg": "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15"
        },
        {
            "id": 2,
            "name": "Michael Jackson",
            "genre": "Pop",
            "urlImg": "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa"
        },
        {
            "id": 3,
            "name": "Emicida",
            "genre": "Hip Hop",
            "urlImg": "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068"
        },
        {
            "id": 4,
            "name": "Chitãozinho e Xororó",
            "genre": "Sertanejo",
            "urlImg": "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4"
        },
        {
            "id": 5,
            "name": "Mc Coringa",
            "genre": "Funk",
            "urlImg": "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56"
        },
        {
            "id": 6,
            "name": "Arlindo Cruz",
            "genre": "Samba",
            "urlImg": "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839"
        },
        {
            "id": 7,
            "name": "Caetano Veloso",
            "genre": "MPB",
            "urlImg": "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757"
        }
    ]
    return (
        <div className="container__musica">
            <div className={`background__musica__cor ${selectedCategory.cor}`}></div>
            <div className="background__musica"></div>
            <div className={`fade ${selectedCategory.corFade}`}></div>
            <h1 className='musica__titulo'>{selectedCategory.span}</h1>

            <section className='section__cards'>
                <h1>24 Horas de {selectedCategory.span}</h1>
                    <div className="cards__container">
                        <div className="grid-container">
                            {artists.map((item) => (
                                <div className="artist-card" id="">
                                    <div class="card-img">
                                        <img class="artist-img" src={item.urlImg} alt={item.name} />
                                        <div class="play">
                                            <span><FontAwesomeIcon icon={faPlay} /></span>
                                        </div>
                                    </div><div class="card-text">
                                        <span class="artist-name">{item.name}</span>
                                        <span class="artist-categorie">Artista</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>
        </div>
    );
}
export default Dynamic;