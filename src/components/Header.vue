<template>
    <v-layout>
        <v-app-bar :elevation="20">
            <v-btn text to="/">Accueil</v-btn>
            <v-btn text to="/">Cours</v-btn>
            <v-btn text to="/">À propos</v-btn>
        </v-app-bar>
    </v-layout>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>


<style scoped>

.v-app-bar{
    justify-content: center;
}
.v-btn{
    justify-content: center;
}
</style>