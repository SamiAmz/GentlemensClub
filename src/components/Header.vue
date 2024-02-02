<template>
    <v-layout>

        <v-app-bar id="semi-transparent-app-bar" color="transparent" :elevation="20">
            <!-- Align items with space between them -->
            <v-row align="center" justify="space-between" no-gutters>
                <!-- "Gentlemen's club" aligned to the left -->
                <img src = @/assets/logo.png> 
                
                <!-- Center content with no specific alignment -->
                <div>
                    <router-link to="/">
                        <v-btn color="white" outlined :ripple="false" text>Accueil</v-btn>
                    </router-link>
                    <router-link to="/">
                        <v-btn color="white" outlined :ripple="false" text>Cours</v-btn>
                    </router-link>
                    <router-link to="/">
                        <v-btn color="white" outlined :ripple="false" text>À propos</v-btn>
                    </router-link>
                </div>
                
                <!-- "login" elements aligned to the right -->
                <div>
                    <router-link id="login" style="text-decoration: none; color: inherit" to="/">
                        <p id="loginText">login</p>
                        <v-icon large color="white">mdi-login-variant</v-icon>

<<<<<<< Updated upstream
            <v-row align="center" justify="center">
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
                <router-link id="login" style="text-decoration: none; color: inherit" to="/">
                    <p id="loginTexte">login</p>
                </router-link>
                <router-link to="/">
                    <v-icon large color="white"> mdi-login-variant </v-icon>
                </router-link>
=======
                    </router-link>
                </div>
>>>>>>> Stashed changes
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
#semi-transparent-app-bar {
    background-color: rgba(0, 0, 0, 0.5) !important;
    box-shadow: none !important;
}

/* Set the specific margin for the first element ("Gentlemen's club") to 0 */
#title {
    margin-left: 0;
    color: white;
    font-size: 30px;
}

#login {
    display: flex; /* This will align the text and icon horizontally */
    align-items: center; /* This will center the text and icon vertically */
    text-decoration: none;
    color: inherit;
}

#loginText {
    margin-right: 8px; /* Adjust the space between the text and icon as needed */
    color: white;
    font-size: 20px;
}

/* Adjust the margin and padding for buttons */
.v-btn {
    margin: 10px 20px;
    padding: 10px 20px;
    box-shadow: none;
    background: none;
    text-decoration: none;
    font-size: 15px;
}

/* Remove duplicated CSS properties to clean up your code */
</style>
