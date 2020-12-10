<template>
  <div class="col-md-12">
    <div class="card card-container">
      <h4 style="margin-top: 10px; text-align: center; color: greenyellow">User</h4>
      <div style="text-align: left">
        <div v-if="!loading">
          <div>
            <label><strong>UserName:</strong></label> {{ currentViewUser.username }}
          </div>
          <div>
            <label><strong>Password:</strong></label> {{ currentViewUser.password }}
          </div>
          <div>
            <label><strong>Role:</strong></label> {{ currentViewUser.roles[0].name }}
          </div>
          <div>
            <label><strong>Recipes count:</strong></label> {{ currentViewUser.recipes.length }}
          </div>
        </div>
        <router-link class="badge badge-warning" :to="{
                                    name: 'update-user',
                                    params: {idusers: currentViewUser.idUsers },
                                }">
          edit
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import authHeader from "@/services/auth-header";
import UserDataService from "@/services/UserDataService";

export default {
  name: "user",
  data() {
    return {
      currentViewUser: {
        recipes: [],
        roles: []
      },
      message: '',
      loading: true
    };
  },
  methods: {
    getCurrentViewUser(idusers) {
      this.loading = true;
      UserDataService.get(idusers, authHeader())
          .then(response => {
            this.currentViewUser = response.data;
            this.loading = false;
          })
          .catch(e => {
            console.log(e);
          });
    },
    alert() {
      this.$swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You don\' have access. Please login!',
        footer: '<a href="https://en.wikipedia.org/wiki/Login">Why do I have this issue?</a>'
      })
      this.$router.push('/login');
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.alert();
    } else if (this.currentUser.roles[0] !== "ROLE_ADMIN") {
      this.alert();
    } else {
      this.message = '';
      this.getCurrentViewUser(this.$route.params.idusers)
    }
  }
};
</script>

<style scoped>
.card-container.card {
  max-width: 350px !important;
}

.card {
  padding: 20px 25px 30px;
  margin: 25px auto 25px;
  border: none;
}

@media screen and (max-width: 759px) {
  .card {
    position: absolute;
    left: 70px;
    right: 10px;
    margin: 50px auto 25px;
  }
}
</style>