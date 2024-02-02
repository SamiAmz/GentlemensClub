<template>
  <v-container>
    <v-img src="@/assets/box3.png"></v-img>
  </v-container>
  <v-container>
    <v-app>
      <v-toolbar-title class="mr-5"> Club de Champions </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined class="mr-5" color="red"> Voir les abonnements. </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app>
    <v-btn icon></v-btn>
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
