<template>
    <v-layout>

        <v-app-bar id="semi-transparent-app-bar" :elevation="20">

            <v-row align="center" justify="space-between">
                <v-img max-width="90" max-height="100" src="@/assets/logo.png"></v-img>

                <div>
                    <router-link to="/" exact active-class="button-active">
                        <v-btn color="white" outlined :ripple="false" text>Accueil</v-btn>
                    </router-link>
                    <router-link to="/" exact>
                        <v-btn color="white" outlined :ripple="false" text>Horaire</v-btn>
                    </router-link>
                    <router-link to="/contact" exact active-class="button-active">

                        <v-btn color="white" outlined :ripple="false" text>À propos</v-btn>
                    </router-link>
                </div>

                <div>
                    <router-link id="login" to="/login"
                        style="text-decoration: none; color: inherit; display: flex; align-items: center;">
                        <p id="loginTexte">Connexion</p>
                        <v-icon large color="white"> mdi-login-variant </v-icon>
                    </router-link>
                </div>
            </v-row>
        </v-app-bar>
    </v-layout>
</template>

<style scoped>
:deep(.button-active .v-btn__content) {
    color: rgb(255, 91, 8)
}


#semi-transparent-app-bar {
    background-color: rgba(0, 0, 0, 0.5) !important;
    box-shadow: none !important;
    padding-left: 100px;
    padding-right: 100px;
}


.v-btn {
    margin: 10px 20px;
    padding: 10px 20px;
    box-shadow: none;
    background: none;
    text-decoration: none;
    font-size: 15px;
}

#login {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
}

#loginTexte {
    margin-right: 8px;
    color: white;
    font-size: 20px;
}
</style>




<script>
import "@mdi/font/css/materialdesignicons.css";

export default {
    name: "AppHeader",
};
</script>