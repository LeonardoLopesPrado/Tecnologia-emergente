import ItemMusica from "./components/ItemMusica";
import React from "react";

function Musicas() {
  return (
    <>
      <div class="container">
        <div class="music-boxes">
          <ItemMusica
            nome="Man in the box"
            artista="Alice in Wonderlands"
            genero="Rock"
            ano="2023"
          />
          <ItemMusica
            nome="The bad thing"
            artista="Arctic Monkeys"
            genero="Indie"
            ano="2023"
          />
          <ItemMusica
            nome="Battery"
            artista="Metallica"
            genero="Rock"
            ano="2023"
          />
        </div>
      </div>
    </>
  );
}

export default Musicas;
