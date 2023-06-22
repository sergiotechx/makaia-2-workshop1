import "../styles/styles.scss";
import pokedexIcon from "../images/pokedex-icon.svg";
import fireIcon from "../images/fire-icon.svg";
import Charizard from "../images/Charizard.svg";
import Squirtle from "../images/Squirtle.svg";
import Bulbasaur from "../images/Bulbasaur.svg";
import Clefairy from "../images/Clefairy.svg";
import Mewtwo from "../images/mewtwo.svg";

let form = document.getElementById('app');
let htmlCode =  `
 <header class="header">
      <figure>
        <img
          class="pokedex-icon"
          src= ${pokedexIcon}
          alt="Pokeball"
        />
      </figure>
      <h1 class="title">Pokedex</h1>
    </header>
    <main class="main">
      <article class="pokemon">
        <section>
          <img class ="type-icon" src=${fireIcon} alt="Icon Fire" />
          <h2 class="pokemon-name">CHARIZARD</h2>
        </section>
        <figure>
          <img
            class="pokemon-image"
            src=${Charizard}
            alt="Pokeball"
          />
        </figure>
      </article>
      <article class="pokemon-statics">
        <section class="statics">
          <h3 class="statics-subtitle">NO.</h3>
          <p class="statics-text">006</p>
        </section>
        <section class="statics">
          <h3 class="statics-subtitle">LEVEL</h3>
          <p class="statics-text">100</p>
        </section>
        <section class="statics">
          <h3 class="statics-subtitle">TYPE</h3>
          <p class="statics-text">FIRE</p>
        </section>
        <section class="statics">
          <h3 class="statics-subtitle">HABILITY</h3>
          <p class="statics-text">FLAMES</p>
        </section>
        <section class="statics">
          <h3 class="statics-subtitle">HEIGHT</h3>
          <p class="statics-text">1,7 m</p>
        </section>
        <section class="statics">
          <h3 class="statics-subtitle">WEIGHT</h3>
          <p class="statics-text">90,5 Kg</p>
        </section>
      </article>
    </main>
    <footer>
      <h3 class="footer-subtitle">OTHERS</h3>
      <figure class="figure-pokemons">
        <img class="image-squirtle" src=${Squirtle} alt="">
        <img class="image-bulbasaur" src=${Bulbasaur} alt="">
        <img class="image-clefairy" src=${Clefairy} alt="">
        <img class="image-mewtwo" src=${Mewtwo} alt="">
      </figure>
    </footer>`;
    form.innerHTML = htmlCode;