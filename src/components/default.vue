<template>
  <div class="container-page">
    <div class="contenu-page-default">
      <h1 class="titre-default">404 - Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageParDefaut",
};
</script>

<style scoped>
.container-page {
  margin-top: 10vh;
  padding-top: 1vh;
  padding-bottom: 50px;
}

.contenu-page-default {
  padding: 20px;
  text-align: center;
}

.titre-default {
  color: #ff5733;
}
</style>
