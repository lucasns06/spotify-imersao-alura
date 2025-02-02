import { useEffect } from 'react';
import { useCategory } from '../CategoriesContext';
import { useNavigate } from 'react-router-dom';
import './Dynamic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import anitta from '../../assets/playlist/anitta.jpg';
import grupomenos from '../../assets/playlist/grupomenos.jpg';
import tophits from '../../assets/playlist/tophits.jpg';
import funk from '../../assets/playlist/9.jpeg';
import pagode from '../../assets/playlist/8.jpeg';
import rap from '../../assets/playlist/12.jpeg';
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
            "name": "Funk Hits",
            "genre": "Vou Raspar Seu Bigodin e os funks mais",
            "urlImg": funk
        },
        {
            "id": 2,
            "name": "Top Brasil",
            "genre": "Anitta e os maiores hits do pais.",
            "urlImg": anitta
        },
        {
            "id": 3,
            "name": "Top Vídeos Anos 2000",
            "genre": "Clipe dos maiores hits dos anos 2000.",
            "urlImg": tophits
        },
        {
            "id": 4,
            "name": "Sertanejo Hits",
            "genre": "Chitãozinho & Xororó e suas musicas",
            "urlImg": "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4"
        },
        {
            "id": 5,
            "name": "Rap Hits",
            "genre": "Rap",
            "urlImg": rap
        },
        {
            "id": 6,
            "name": "Top Pagodes",
            "genre": "Pagode",
            "urlImg": pagode
        },
        {
            "id": 7,
            "name": "Grupo Menos É Mais",
            "genre": "Pagode",
            "urlImg": grupomenos
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
                        <div className="grid-container2">
                            {artists.map((item) => (
                                <div className="artist-card2" id="" key={item.id}>
                                    <div class="card-img2">
                                        <img class="artist-img2" src={item.urlImg} alt={item.name} />
                                        <div class="play">
                                            <span><FontAwesomeIcon icon={faPlay} /></span>
                                        </div>
                                    </div><div class="card-text2">
                                        <span class="artist-name2">{item.name}</span>
                                        <span class="artist-categorie">{item.genre}</span>
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