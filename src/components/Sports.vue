<template>
  <div>
    <component :is="selectedSportComponent" />
  </div>
  <Chat />>
</template>

<script>
import Chat from "./Chat.vue";
import MMAComponent from "./Sports/Mma.vue";
import BoxComponent from "./Sports/Box.vue";
import WrestlingComponent from "./Sports/Wrestling.vue";
import NotFoundComponent from "./Sports/default.vue";
// Importez d'autres composants de sport ici

export default {
  name: "SportsPage",
  props: ["sportNom"],
  computed: {
    selectedSportComponent() {
      switch (this.sportNom) {
        case "Mma":
          return MMAComponent;
        case "Box":
          return BoxComponent;
        case "Wrestling":
          return WrestlingComponent;
        default:
          return NotFoundComponent; // Afficher un composant par défaut pour les sports inconnus
      }
    },
  },
  components: { Chat },
};
</script>
