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
                            <span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                   <path fill="white" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </span>
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
