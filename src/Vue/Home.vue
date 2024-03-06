<template>
  <div id="page-container">
    <!-- carousel -->
    <div class="carousel">
      <!-- list item -->
      <div class="list">
        <div class="item">
          <img src="../assets/imageCaroussel/img1.jpg" id="mmaImg" />
          <div class="content">
            <div class="author">POWER</div>
            <div class="title">COMBAT ULTIME</div>
            <div class="topic">MMA</div>
            <div class="des">
              Découvrez le MMA dans notre gym : un mélange explosif de
              techniques de <br />combat alliant force, agilité et stratégie.
              Nos cours, encadrés par des<br />
              instructeurs experts, vous offrent une expérience intense
              favorisant la confiance<br />
              en soi et le dépassement de soi. Rejoignez-nous pour explorer tout
              le potentiel<br />
              du MMA dès aujourd'hui.
            </div>
            <div class="buttons" id="moreBtn">
              <router-link
                :to="{ name: 'Sports', params: { sportNom: 'Mma' } }"
              >
                <button>S'ABONNER</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/imageCaroussel/img2.jpg" />
          <div class="content">
            <div class="author">STRONGER</div>
            <div class="title">Lutte Libre</div>
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
              pour tous les niveaux.
            </div>
            <div class="buttons" id="moreBtn">
              <router-link
                :to="{ name: 'Sports', params: { sportNom: 'Wrestling' } }"
              >
                <button>S'ABONNER</button>
              </router-link>
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
            <div class="buttons" id="moreBtn">
              <router-link
                :to="{ name: 'Sports', params: { sportNom: 'Box' } }"
              >
                <button>S'ABONNER</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- list thumnail -->
      <div class="thumbnail">
        <div class="item">
          <img src="../assets/imageCaroussel/img1.jpg" />
          <div class="content"></div>
        </div>
        <div class="item">
          <img src="../assets/imageCaroussel/img2.jpg" />
          <div class="content"></div>
        </div>
        <div class="item">
          <img src="../assets/imageCaroussel/img3.jpg" />
          <div class="content"></div>
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


    <h1 class="titleCards">Nos abonnemnets</h1>
    <div class="container-cards">
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <h3>MMA</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Êtes-vous prêt à découvrir le combattant indomptable qui est en
                vous et à atteindre une forme physique optimale ? Rejoignez nos
                cours d'arts martiaux mixtes où nous combinons technique, force
                et stratégie. Dans notre école de MMA, vous apprendrez l'art du
                combat.
              </p>
              <router-link
                :to="{ name: 'Sports', params: { sportNom: 'Mma' } }"
              >
                <button>EN SAVOIR PLUS</button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <h3>WRESTLING</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Avez-vous déjà voulu être rapide et fort comme un ours ?
                Avez-vous déjà eu envie d'apprendre à faire un ours ? Ensuite,
                vous êtes invités à la lutte libre où vous apprendrez
                l'auto-défense à l'aide de saisies et de lancers.Dans notre
                école de Wrestling, vous apprendrez l'art du grapling.
              </p>
              <router-link
                :to="{ name: 'Sports', params: { sportNom: 'Wrestling' } }"
              >
                <button>EN SAVOIR PLUS</button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <h3>BOXING</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                La boxe est un sport purement corps à corps, vous souhaitez vous
                protéger ainsi que vos proches dans la rue ? Alors
                inscrivez-vous à la boxe. Comme on dit dans mon pays, la
                couronne droite est l'enterrement gauche. Dans notre école vous
                allez apprendre la Box
              </p>
              <router-link
                :to="{ name: 'Sports', params: { sportNom: 'Box' } }"
              >
                <button>EN SAVOIR PLUS</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="video-background">
        <video autoplay muted loop id="background-video">
          <source src="../assets/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="video-overlay">
          <h1 class="video-text">AU CENTRE DE LA VIE ÉNERGÉTIQUE</h1>
        </div>
      </div>
    </div>
  </div>
  <Chat />
</template>

<script>

import "./styleCarroussel.css";
import "./app.js";
import "https://kit.fontawesome.com/95a02bd20d.js";
import "./style.css";
export default {
  name: "Home",
  mounted() { 
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    subscribe() {},
  },
};

document.addEventListener("scroll", function () {
  var video = document.getElementById("background-video");
  var videoPosition = video.getBoundingClientRect().top;
  var videoBottomPosition = video.getBoundingClientRect().bottom;
  var screenPosition = window.innerHeight / 2;
  if (
    (videoPosition < screenPosition && videoBottomPosition > 0) ||
    (videoBottomPosition > screenPosition && videoPosition < 0)
  ) {
    video.style.opacity = "1";
    //title.style.opacity = "1";
  } else {
    video.style.opacity = "0";
    //title.style.opacity = "0";
  }
});
</script>
