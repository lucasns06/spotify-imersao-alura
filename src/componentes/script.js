import { useEffect } from "react";

const Script = () => {
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
            resultPlaylist.classList.add("hidden");
            const gridContainer = document.querySelector(".grid-container");
            gridContainer.innerHTML = "";

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

            resultArtist.classList.remove("hidden");
        }

        document.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase().trim();

            if (searchTerm === "") {
                resultPlaylist.classList.remove("hidden");
                resultArtist.classList.add("hidden");
                return;
            }

            requestApi(searchTerm);
        });
    }, []);

    return null;
};

export default Script;
