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

<!--<template>-->
<!--  <div id="app" class="container-fluid">-->
<!--    <nav class="navbar navbar-expand navbar-dark bg-dark">-->
<!--      <router-link to="/" class="navbar-brand">Home page</router-link>-->
<!--      <div class="navbar-nav mr-auto">-->
<!--        <li class="nav-item">-->
<!--          <router-link class="btn btn-primary" to="/recipes">Recipes</router-link>-->
<!--        </li>-->
<!--        <li v-if="currentUser" class="nav-item">-->
<!--          <router-link class="btn btn-primary" to="/profile">My Profile</router-link>-->
<!--        </li>-->
<!--      </div>-->
<!--      <div clas ="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">-->
<!--        <ul class="navbar-nav text-right">-->
<!--        <li v-show="!currentUser" class="nav-item">-->
<!--          <router-link to="/login" class="nav-link">-->
<!--            <font-awesome-icon icon="sign-in-alt" />Login-->
<!--          </router-link>-->
<!--        </li>-->
<!--        <li v-show="currentUser" class="nav-item">-->
<!--          <a class="nav-link" href @click.prevent="logOut">-->
<!--            <font-awesome-icon icon="sign-out-alt"/>-->
<!--            LogOut-->
<!--          </a>-->
<!--        </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </nav>-->
<!--    <br/>-->
<!--    <router-view/>-->
<!--  </div>-->
<!--</template>-->

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
        role: ''
      },
      {
        text: 'Recipes',
        path: '/recipes',
        icon: 'restaurant',
        role: ''
      },
      {
        text: 'Login',
        path: '/login',
        icon: 'log-in',
        role: ''
      },
      {
        text: 'Logout',
        path: '/logout',
        icon: 'log-out',
        role: 'user'
      }
    ]
  })
}
</script>

<!--<script>-->
<!--export default {-->
<!--  name: "app",-->
<!--  computed: {-->
<!--    currentUser() {-->
<!--      return this.$store.state.auth.user;-->
<!--    },-->
<!--    showAdminBoard() {-->
<!--      if (this.currentUser && this.currentUser.roles) {-->
<!--        return this.currentUser.roles.includes('ROLE_ADMIN');-->
<!--      }-->

<!--      return false;-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    logOut() {-->
<!--      this.$store.dispatch('auth/logout');-->
<!--      this.$router.push('/login');-->
<!--    }-->
<!--  }-->
<!--};-->

<!--</script>-->

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
  margin: 10px;
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