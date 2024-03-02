<template>
  <div class="page-container">
    <div class="default-page-content">
      <h1 class="default-h1">404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultPage",
};
</script>

<style scoped>
.page-container {
  background: #333;
  margin-top: 10vh;
  padding-top: 1vh;
  padding-bottom: 50px;
}

.default-page-content {
  padding: 20px;
  text-align: center;
}

.default-h1 {
  color: #ff5733;
}
</style>
