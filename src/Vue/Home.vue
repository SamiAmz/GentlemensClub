<template>
  <div id="page-container">
    <video autoplay loop muted playsinline>
      <source src="@/assets/intro.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <v-container>
      <v-carousel cycle interval="3000" hide-delimiters>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item" cover></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <v-container>
        <v-toolbar-title class="mr-5"> Club de Champions </v-toolbar-title>
        <v-row>
          <v-col>
            <v-card class="mx-auto my-8" elevation="16">
              <v-card-title>
                🥊 Découvrez l'essence de la puissance physique et mentale ! 🥋</v-card-title>
              <v-card-text>
                <p>Au [Nom du Gym de Combat], nous vous proposons bien plus qu'un simple entraînement. Immergez-vous dans
                  l'univers exceptionnel du combat, où la discipline, la force et la technique fusionnent pour créer une
                  expérience véritablement transformante.</p>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto my-8" elevation="16">
              <v-card-title>
                🔥 Devenez membre aujourd'hui et transformez votre vie ! 🔥</v-card-title>
              <v-card-text>
                <p>Rejoignez-nous dès maintenant pour profiter de tous les avantages exclusifs réservés à nos membres.
                  Démarrez votre voyage vers une meilleure version de vous-même !</p>
              </v-card-text>
              <v-card-actions>[Inscrivez-vous maintenant] [Numéro de Contact] [Adresse du Gym]</v-card-actions>
            </v-card>
            <v-card class="mx-auto my-8" elevation="16">
              <v-card-title>
                🥋 Cours Quotidiens pour Adultes ! 💪</v-card-title>
              <v-card-text>
                <p>Plongez-vous dans l'intensité du combat chaque jour au [Nom du Gym de Combat] ! Rejoignez notre
                  programme
                  exclusif réservé aux adultes pour perfectionner vos compétences physiques et mentales. Transformez votre
                  routine avec des sessions quotidiennes passionnantes. Prêt à relever le défi ? 💥 [Inscrivez-vous
                  maintenant] [Numéro de Contact] [Adresse du Gym] </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="mx-auto my-8" max-width="600" elevation="16">
              <v-card-title>Ce que nous offrons :</v-card-title>
              <v-card-subtitle>Cours de Combat de Classe Mondiale :</v-card-subtitle>
              <v-card-text> De la boxe à la lutte, en passant par les arts martiaux
                mixtes (MMA),
                nos
                instructeurs expérimentés vous guideront à travers des cours dynamiques adaptés à tous les niveaux.
                <br>
                <v-card-subtitle>Entraînement Personnalisé :</v-card-subtitle> Atteignez vos objectifs spécifiques avec
                nos
                <br>
                programmes sur mesure. Que vous
                souhaitiez perdre du poids, améliorer votre condition physique ou perfectionner vos compétences de combat,
                notre équipe dévouée est là pour vous.
                <br>
                <v-card-subtitle>Ambiance Motivante :</v-card-subtitle> Rejoignez une communauté passionnée et motivée.
                <br>
                L'énergie positive qui règne au sein du
                gym vous encouragera à repousser vos limites et à atteindre des sommets que vous n'auriez jamais imaginés.
                <br>
                <v-card-subtitle>Équipement de Pointe :</v-card-subtitle> Nos installations modernes sont équipées des
                dernières technologies et des meilleurs
                équipements pour garantir un environnement propice à la réussite.
                <br>
                <v-card-subtitle>Programmes de Bien-Être :</v-card-subtitle> Parce que la santé mentale est tout aussi
                <br>
                importante, nous offrons des cours de
                méditation, de yoga et d'autres activités pour favoriser l'équilibre entre le corps et l'esprit.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
      <v-spacer></v-spacer>
      <v-btn outlined class="mr-5" color="red"> Voir les abonnements. </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn icon></v-btn>
    </v-container>
  </div>
</template>

<script>
import item1 from "@/assets/box3.png";
import item2 from "@/assets/box3.png";
import item3 from "@/assets/box3.png";
export default {
  name: "Home",
  data() {
    return {
      items: [item1, item2, item3],
    };
  },
};
</script>

<style scoped>
video {
  min-height: 40%;
  min-width: 100%;
  line-height: 0;

}

.v-card {
  background-color: gray;
}

.v-card-title {
  color: rgba(87, 0, 0, 0.603);
}

.v-card-subtitle {
  color: rgb(255, 255, 255);
}

.v-card-text {
  min-height: 00px;
  margin: 0;
}

#page-container {
  background-color: black;
  color: white;
}
</style>
