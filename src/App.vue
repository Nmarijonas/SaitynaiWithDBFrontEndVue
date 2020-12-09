<template>
  <div id="app">
    <ResponsiveNavigation
        :nav-links="navLinks"
        :image-path="require('./assets/recipe-book.png')"
        :current-user="$store.state.auth.user"
    />
    <router-view
    />
  </div>
</template>

<script>
import ResponsiveNavigation from "@/components/ResponsiveNavigation";

export default {
  components: {
    ResponsiveNavigation
  },
  data: () => ({
    navLinks: [
      {
        text: 'Home',
        path: '/',
        icon: 'home',
        role: ['guest', 'user', 'admin']
      },
      {
        text: 'Recipes',
        path: '/recipes',
        icon: 'restaurant',
        role: ['guest', 'user', 'admin']
      },
      {
        text: 'MyRecipes',
        path: '/myRecipes',
        icon: 'book',
        role: ['', 'user', '']
      },
      {
        text: 'Profile',
        path: '/profile',
        icon: 'person',
        role: ['', 'user', 'admin']
      },
      {
        text: 'Login',
        path: '/login',
        icon: 'log-in',
        role: ['guest', '', '']
      },
      {
        text: 'Logout',
        path: '/logout',
        icon: 'log-out',
        role: ['', 'user', 'admin']
      }
    ]
  })
}
</script>

<style lang="scss">
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

ul li {
  list-style: none;
  border-left: 2px solid greenyellow;
  margin: 2px;
  position: relative;
  left: 0;
  transition: 0.5s;
}

ul li:hover {
  left: 10px;
}

ul li p {
  position: relative;
  display: inline-block;
  padding: 8px;
  margin: 0;
}

.site-info {
  color: green;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
  background-color: gray;
  color: greenyellow;
  border-color: gray;
}

.btn-primary:hover, .btn-primary:focus {
  color: white;
  background-color: greenyellow;
  border-color: gray;
}

.container-fluid {
  text-align: center;
}
</style>