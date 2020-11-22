<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Home page</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="btn btn-primary" to="/recipes">Recipes</router-link>
        </li>
      </div>
      <div clas ="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav text-right">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt"/>
            LogOut
          </a>
        </li>
        </ul>>
      </div>>
    </nav>
    <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};

</script>

<style>
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