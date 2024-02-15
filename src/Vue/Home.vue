<template>
  <div id="page-container">
    <!-- carousel -->
    <div class="carousel">
      <!-- list item -->
      <div class="list">
        <div class="item">
          <img src="../assets/imageCaroussel/img1.jpg" />
          <div class="content">
            <div class="author">POWER</div>
            <div class="title">COMBAT ULTIME</div>
            <div class="topic">MMA</div>
            <div class="des">
              <!-- lorem 50 -->
              Découvrez le MMA dans notre gym : un mélange explosif de
              techniques de <br />combat alliant force, agilité et stratégie.
              Nos cours, encadrés par des<br />
              instructeurs experts, vous offrent une expérience intense
              favorisant la confiance<br />
              en soi et le dépassement de soi. Rejoignez-nous pour explorer tout
              le potentiel<br />
              du MMA dès aujourd'hui.
            </div>
            <div class="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/imageCaroussel/img2.jpg" />
          <div class="content">
            <div class="author">STRONGER</div>
            <div class="title">LUCHA LIBRE</div>
            <div class="topic">WRESTLING</div>
            <div class="des">
              Plongez dans le monde captivant du wrestling, un sport de combat
              intense où<br />
              la technique et la puissance sont essentielles. Nos cours,
              encadrés par <br />des professionnels expérimentés, vous
              permettront de développer vos<br />
              compétences tout en repoussant vos limites physiques et mentales.
              Que vous<br />
              soyez novice ou athlète chevronné, notre gym offre une expérience
              immersive<br />
              pour tous les niveaux. Rejoignez-nous dès maintenant et découvrez
              <br />l'excitation du wrestling.
            </div>
            <div class="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/imageCaroussel/img3.jpg" />
          <div class="content">
            <div class="author">FASTER</div>
            <div class="title">SPORT COMBAT</div>
            <div class="topic">BOXING</div>
            <div class="des">
              Plongez dans l'univers envoûtant de la boxe, un sport de combat
              qui allie force,<br />
              agilité et discipline. Nos cours de boxing, dirigés par des
              professionnels <br />aguerris, vous offrent une expérience intense
              et stimulante. Que vous souhaitiez<br />
              améliorer votre technique, augmenter votre endurance ou simplement
              vous<br />
              défouler, notre gym est l'endroit idéal pour vous entraîner.
              Rejoignez-nous dès<br />
              maintenant et découvrez tout le potentiel de la boxe.
            </div>
            <div class="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <!-- list thumnail -->
      <div class="thumbnail">
        <div class="item">
          <img src="../assets/imageCaroussel/img1.jpg" />
          <div class="content">
            <div class="description">MMA</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/imageCaroussel/img2.jpg" />
          <div class="content">
            <div class="description">WRESTLING</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/imageCaroussel/img3.jpg" />
          <div class="content">
            <div class="description">BOXING</div>
          </div>
        </div>
      </div>
      <!-- next prev -->

      <div class="arrows">
        <button id="prev">
          <v-icon>mdi-arrow-left-box </v-icon>
        </button>
        <button id="next">
          <v-icon>mdi-arrow-right-box</v-icon>
        </button>
      </div>
      <!-- time running -->
      <div class="time"></div>
    </div>
  </div>
</template>

<script>
import "./style.css";
import "./app.js";
export default {
  name: "Home",
};
</script>
