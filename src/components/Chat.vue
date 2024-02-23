<template>
  <v-row justify="end">
    <v-col cols="12" class="d-flex justify-end pa-4">
      <v-btn
        fab
        dark
        color="red"
        class="fab-bottom-right"
        @click="dialog = !dialog"
      >
        <v-icon size="30">mdi-message-reply-text</v-icon>
      </v-btn>
    </v-col>
  </v-row>

  <v-dialog v-model="dialog" max-width="500px" class="dialog-custom">
    <v-card shaped class="dialog-card">
      <v-card-title class="headline pink lighten-3 text-center"
        >Posez votre question!</v-card-title
      >
      <v-card-text>
        <v-text-field
          label="Votre nom"
          v-model="name"
          outlined
          class="input-field mb-2"
        ></v-text-field>
        <v-textarea
          label="Votre question"
          v-model="question"
          :counter="500"
          required
          outlined
          class="input-field mb-2"
        ></v-textarea>
        <v-text-field
          label="Votre numero de téléphone"
          v-model="phone"
          outlined
          class="input-field mb-2"
          :rules="[rules.onlyNumbers]"
          placeholder="Juste des chiffres"
        ></v-text-field>
        <v-text-field
          label="Votre Email"
          v-model="email"
          type="email"
          outlined
          class="input-field mb-2"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="dialog-actions-custom">
        <v-btn color="red darken-1" text @click="clearForm" class="clear-button"
          >Clear</v-btn
        >

        <v-spacer></v-spacer>
        <v-btn
          color="red darken-1"
          text
          @click="dialog = false"
          class="action-button"
          >Annuler</v-btn
        >
        <v-btn
          color="red darken-1"
          text
          @click="submitQuestion"
          class="action-button"
          >Envoyer</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data: () => ({
    dialog: false,
    name: "",
    question: "",
    phone: "",
    email: "",
    phone: "",
    rules: {
      onlyNumbers: (v) =>
        /^[0-9]*$/.test(v) || "Juste des chiffres qui sont permis",
    },
  }),
  methods: {
    submitQuestion() {
      this.sendEmail();
    },
    clearForm() {
      this.name = "";
      this.question = "";
      this.phone = "";
      this.email = "";
    },
    closeDialog() {
      this.dialog = false;
      this.clearForm();
    },
    sendEmail() {
      const templateParams = {
        name: this.name,
        question: this.question,
        phone: this.phone,
        email: this.email,
      };
      const serviceID = "service_aj2qxpa";
      const templateID = "template_2ldkaan";
      const userID = "yFTkKeNR4jdr1oXhr";

      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log("Email successfully sent!", response);
          this.dialog = false;
          this.clearForm();
        })
        .catch((err) => console.error("Failed to send email. Error: ", err));
    },
  },
};
</script>

<style scoped>
.fab-bottom-right {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 2;
}

.dialog-custom .v-card__title {
  border-radius: 4px 4px 0 0;
}

.dialog-card {
  border-radius: 16px;
}

.input-field {
  background-color: white;
  border-radius: 8px;
}

.action-button {
  border-radius: 8px;
}

.pink.lighten-3 {
  color: white;
  background-color: #db3f02;
}

.text-center {
  text-align: center;
}

.mb-2 {
  margin-bottom: 8px;
}

.dialog-actions-custom {
  justify-content: flex-end;
}

.clear-button {
  margin-right: auto;
}
</style>
