<template>
  <div class="col-md-12">
    <div class="listRecipes listRecipes-container">
      <h1>Users</h1>
      <ul id="recipesListId" v-if="retrieveUsers">
        <li id="recipesItemId" v-for="(user,index) in users" :key="index">
          <router-link class="link-items" :to="{
                                    name: 'user-details',
                                    params: {idusers: user.idUsers },
                                }">
            id:{{ user.idUsers }} // {{ user.username }} //
            {{ user.roles[0].name }}
          </router-link>
        </li>
      </ul>
      <a style="width:100px; font-size: 15px;   margin: 20px auto" class="badge badge-success"
         :href="'/addUser'"
      >
        Create new
      </a>
    </div>
  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";
import authHeader from "@/services/auth-header";

export default {
  name: "users-list",
  data() {
    return {
      users: []
    };
  },
  methods: {
    retrieveUsers() {
      // const userId = this.currentUser.id;
      UserDataService.getAll(authHeader())
          .then(response => {
            this.users = response.data; // JSON are parsed automatically.
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveUsers();
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
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.alert();
    } else if (this.currentUser.roles[0] !== "ROLE_ADMIN") {
      this.alert();
    } else {
      this.retrieveUsers();
    }
  }
};
</script>
<style scoped>

.listRecipes-container.listRecipes {
  max-width: 350px !important;
}

.listRecipes {
  margin: 10px auto 10px;
  padding: 40px 20px;
}

h1 {
  color: greenyellow;
  letter-spacing: 1px;
  text-shadow: 4px 4px 4px green;
  background-color: ghostwhite;
}

#recipesListId {
  margin: 30px auto 10px;
  padding: 0;
  text-align: center;
}

#recipesItemId {
  margin: 10px auto;
  text-align-all: center;
}

.link-items {
  text-decoration: none;
  display: block;
}

@media screen and (max-width: 759px) {
  .listRecipes {
    position: absolute;
    left: 70px;
    right: 10px;
    margin: 10px auto 25px;
  }

  #recipesListId #recipesItemId {
    background-color: whitesmoke;
    border: 2px solid greenyellow;
    border-radius: 5px;
    -moz-box-shadow: 0 2px 2px green;
    -webkit-box-shadow: 0 2px 2px green;
    box-shadow: 0 2px 2px green;
  }
}

</style>
