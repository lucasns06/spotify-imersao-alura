import { useContext, createContext, useState } from 'react';
import Playlist1 from "../assets/playlist/1.jpeg";
import Playlist2 from "../assets/playlist/2.png";
import Playlist3 from "../assets/playlist/3.jpeg";
import Playlist4 from "../assets/playlist/4.jpeg";
import Playlist5 from "../assets/playlist/5.jpeg";
import Playlist6 from "../assets/playlist/6.jpeg";
import Playlist7 from "../assets/playlist/7.jpeg";
import Playlist9 from "../assets/playlist/9.jpeg";
import Playlist8 from "../assets/playlist/8.jpeg";
import Playlist10 from "../assets/playlist/10.jpeg";
import Playlist11 from "../assets/playlist/11.jpeg";
import Playlist12 from "../assets/playlist/12.jpeg";
import Playlist13 from "../assets/playlist/13.jpeg";
import Playlist14 from "../assets/playlist/14.jpeg";
import Playlist15 from "../assets/playlist/15.jpeg";
const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            img: Playlist1,
            span: 'Boas festas',
            cor: 'card1',
            corFade: 'card1-fade'
        },
        {
            id: 2,
            img: Playlist2,
            span: 'Feitos para você',
            cor: 'card2',
            corFade: 'card2-fade'
        },
        {
            id: 3,
            img: Playlist3,
            span: 'Lançamentos',
            cor: 'card3',
            corFade: 'card3-fade'
        },
        {
            id: 4,
            img: Playlist4,
            span: 'Creators',
            cor: 'card4',
            corFade: 'card4-fade'
        },
        {
            id: 5,
            img: Playlist5,
            span: 'Para treinar',
            cor: 'card5',
            corFade: 'card5-fade'
        },
        {
            id: 6,
            img: Playlist6,
            span: 'Podcasts',
            cor: 'card6',
            corFade: 'card6-fade'
        },
        {
            id: 7,
            img: Playlist7,
            span: 'Sertanejo',
            cor: 'card7',
            corFade: 'card7-fade'
        },
        {
            id: 8,
            img: Playlist8,
            span: 'Samba e pagode',
            cor: 'card8',
            corFade: 'card8-fade'
        },
        {
            id: 9,
            img: Playlist9,
            span: 'Funk',
            cor: 'card9',
            corFade: 'card9-fade'
        },
        {
            id: 10,
            img: Playlist10,
            span: 'MPB',
            cor: 'card10',
            corFade: 'card10-fade'
        },
        {
            id: 11,
            img: Playlist11,
            span: 'Rock',
            cor: 'card11',
            corFade: 'card11-fade'
        },
        {
            id: 12,
            img: Playlist12,
            span: 'Hip Hop',
            cor: 'card12',
            corFade: 'card12-fade'
        },
        {
            id: 13,
            img: Playlist13,
            span: 'Indie',
            cor: 'card13',
            corFade: 'card13-fade'
        },
        {
            id: 14,
            img: Playlist14,
            span: 'Relax',
            cor: 'card14',
            corFade: 'card14-fade'
        },
        {
            id: 15,
            img: Playlist15,
            span: 'Música Latina',
            cor: 'card15',
            corFade: 'card15-fade'
        },
        {
            id: 16,
            img: Playlist8,
            span: 'Samba e pagode',
            cor: 'card8',
            corFade: 'card8-fade'
        },
        {
            id: 17,
            img: Playlist9,
            span: 'Funk',
            cor: 'card9',
            corFade: 'card9-fade'
        },
        {
            id: 18,
            img: Playlist10,
            span: 'MPB',
            cor: 'card10',
            corFade: 'card10-fade'
        },
        {
            id: 19,
            img: Playlist11,
            span: 'Rock',
            cor: 'card11',
            corFade: 'card11-fade'
        },
        {
            id: 20,
            img: Playlist12,
            span: 'Hip Hop',
            cor: 'card12',
            corFade: 'card12-fade'
        },
        {
            id: 21,
            img: Playlist13,
            span: 'Indie',
            cor: 'card13',
            corFade: 'card13-fade'
        },
        {
            id: 22,
            img: Playlist14,
            span: 'Relax',
            cor: 'card14',
            corFade: 'card14-fade'
        },
        {
            id: 23,
            img: Playlist15,
            span: 'Música Latina',
            cor: 'card15',
            corFade: 'card15-fade'
        },
        {
            id: 24,
            img: Playlist13,
            span: 'Indie',
            cor: 'card13',
            corFade: 'card13-fade'
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState(null);
    return (
        <CategoryContext.Provider value={{ categories, setCategories, selectedCategory, setSelectedCategory  }}>
            {children}
        </CategoryContext.Provider>
    );
}

export const useCategory = () => useContext(CategoryContext);