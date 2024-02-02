<template>
  <div id="footer">
    <v-row align="center" justify="center">
      <v-img max-width="60" max-height="100" src="@/assets/logo.png"></v-img>
      <p>Copyright &copy; 2012-2024 Club de Champions. All its ours DONT COPY <br>
        TOUS DROITS RÉSERVÉS</p>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
}; 2012 - 2024 
</script>

<style>
#footer {
  width: 100%;
  font-family: 'trebuchet ms', sans-serif;
  font-size: 14px;
  padding: 10px 0 0 0;
  text-align: center;
  background: #000000;
}

#footer p {
  margin-top: 1em;
  line-height: 1.7em;
  color: white;
}
</style>
