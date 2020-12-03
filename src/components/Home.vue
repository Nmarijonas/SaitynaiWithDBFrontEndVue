<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to the recipes site
          </h1>
          <h2 class="version">
            demo version 0.0.0
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {}
}
</script>
<style lang="scss" scoped>
.hero {
  background-image: url('https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
}

.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
  color: greenyellow;
}

.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}

.hero-body .version {
  position: absolute;
  top: 500px;
  right: 20px;
  font-size: 30px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  color: greenyellow;
}

.is-xl {
  font-size: 1.7rem;
}

@media screen and (max-width: 759px) {
  .hero-body .title {
    position: absolute;
    left: 70px;
    right: 10px;
    margin: 50px auto 25px;
  }
  .hero-body .version {
    font-size: 20px;
    left: 70px;
    right: 10px;
  }
}
</style>