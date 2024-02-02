<template>
    <v-layout>

        <v-app-bar  color="transparent"
            :elevation="20">

            <v-row align="center" justify="center">
                <v-img max-width="90" max-height="100" src="@/assets/logo.png"></v-img>
                <p id="title">Club de Champions</p>
                <router-link to="/">
                    <v-btn color="white" outlined :ripple="false" text>Accueil</v-btn>
                </router-link>
                <router-link to="/">
                    <v-btn color="white" outlined :ripple="false" text>Cours</v-btn>
                </router-link>
                <router-link to="/">
                    <v-btn color="white" outlined :ripple="false" text>À propos</v-btn>
                </router-link>
                <router-link id="login" style="text-decoration: none; color: inherit;" to="/">
                    <p id="loginTexte">login</p>
                </router-link>
                <router-link to="/">
                    <v-icon large color="white">
                        mdi-login-variant
                    </v-icon>
                </router-link>


            </v-row>
        </v-app-bar>
    </v-layout>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";

export default {
    name: "AppHeader",
};
</script>

<style scoped>
.v-btn {
    margin: 10px 20px 10px 0;
    padding: 10px 20px 20px 20px;
    box-shadow: none;
    background: none;
    text-decoration: none;
    font-size: 15px;
}

#login {
    margin-left: 5dvw;
}

#loginTexte {
    color: white;
    font-size: 20px;
}

#title {
    color: white;
    font-size: 20px;
    margin-right: 5dvw;
}
</style>
