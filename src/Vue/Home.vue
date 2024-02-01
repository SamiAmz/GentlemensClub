<template>
  <v-container>
    <v-toolbar-title class="mr-5"> Club de Champions </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn outlined class="mr-5" color="red"> Voir les abonnements. </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  date() {
    return {
      athletes: [], //tableaux des athletes
    };
  },
};
</script>
