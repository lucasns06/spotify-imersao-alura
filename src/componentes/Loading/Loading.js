import { useEffect } from "react";
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { gsap } from 'gsap';
import './Loading.css'

const Loading = () => {
    useEffect(() => {
        var tl = gsap.timeline({
            defaults: {
                duration: 1
            }
        });
        tl.fromTo('.loading__h1', {
            x: -80,
            opacity: 0
        },
            {
                x: 0,
                opacity: 1,
            }).to('.loading img', {
                scale: 1,
                opacity: 1,
            }).to('.loading__h1__second', {
                opacity: 1,
            }).to('.loading__h1__third', {
                opacity: 1,
            }).to('.loading', {
                display: 'none',
            })
    }, []);
    return (
        <div className="loading">
            <h1 className="loading__h1">Recriação de uma pagina do </h1>
            <img src={logoSpotify} alt="Logo" />
            <h1 className="loading__h1__second">por <span>Lucas Nascimento</span></h1>


            <h1 className="loading__h1__third">Imersão Front End <br />
                2º Edição da <span>Alura</span></h1>
        </div>
    )
}
export default Loading;