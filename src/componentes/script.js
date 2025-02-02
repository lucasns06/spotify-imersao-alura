import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Script = () => {
    const location = useLocation(); 

    useEffect(() => {
        const searchInput = document.getElementById("search-input");
        const resultArtist = document.getElementById("result-artist");
        const resultPlaylist = document.getElementById("result-playlists");

        function requestApi(searchTerm) {
            fetch("/artists.json")
                .then((response) => response.json())
                .then((data) => displayResults(data.artists, searchTerm))
                .catch((error) => console.error("Erro ao buscar o JSON:", error));
        }

        function displayResults(artists, searchTerm) {
            if (resultPlaylist) resultPlaylist.classList.add("hidden"); 
            const gridContainer = document.querySelector(".grid-container");
            if (gridContainer) gridContainer.innerHTML = "";

            const filteredArtists = artists.filter((artist) =>
                artist.name.toLowerCase().includes(searchTerm)
            );

            filteredArtists.forEach((artist) => {
                const artistCard = document.createElement("div");
                artistCard.classList.add("artist-card");

                artistCard.innerHTML = `
                    <div class="card-img">
                        <img class="artist-img" src="${artist.urlImg}" alt="${artist.name}" />
                        <div class="play">
                            <span class="fa fa-solid fa-play"></span>
                        </div>
                    </div>
                    <div class="card-text">
                        <span class="artist-name">${artist.name}</span>
                        <span class="artist-categorie">Artista</span>
                    </div>
                `;
                gridContainer.appendChild(artistCard);
            });

            if (resultArtist) resultArtist.classList.remove("hidden"); 
        }

        function handleInputChange() {
            const searchTerm = searchInput.value.toLowerCase().trim();

            if (searchTerm === "") {
                if (resultPlaylist) resultPlaylist.classList.remove("hidden"); 
                if (resultArtist) resultArtist.classList.add("hidden");  
                return;
            }

            requestApi(searchTerm);
        }

        if (searchInput) {
            document.addEventListener("input", handleInputChange);
        }

        return () => {
            document.removeEventListener("input", handleInputChange);
        };
    }, [location]);

    return null;
};

export default Script;
