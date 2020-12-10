<template>
  <div class="col-md-12">
    <div class="card card-container">
      <h4 style="margin-top: 10px; text-align: center; color: greenyellow">My Recipe</h4>
      <div style="text-align: left">
        <div>
          <div>
            <label><strong>Title:</strong></label> {{ currentRecipe.title }}
          </div>
          <div>
            <label><strong>Ingredients:</strong></label> {{ currentRecipe.ingredients }}
          </div>
          <div>
            <label><strong>Description:</strong></label> {{ currentRecipe.description }}
          </div>
          <div>
            <label><strong>Recipe:</strong></label> {{ currentRecipe.recipe }}
          </div>
          <div>
            <label><strong>Published:</strong></label> {{ currentRecipe.published ? "Published" : "Pending" }}
          </div>
        </div>
        <router-link class="badge badge-warning" :to="{
                                    name: 'update-recipe',
                                    params: {idrecipes: currentRecipe.idrecipes },
                                }">
          edit
        </router-link>
      </div>
      <!--    <div class="commentItem container">-->
      <h4 style="margin-top: 10px; text-align: center; color: greenyellow">Comments</h4>
      <div style="text-align: left">
        <ul>
          <li v-for="(comment, index) in currentRecipe.comments" :key="index" class="list-items"
              style="list-style-type: circle">
            {{ comment.title }} {{ comment.comment }}
            <router-link class="badge badge-warning" :to="{
                                    name: 'update-comment',
                                    params: {idrecipes: currentRecipe.idrecipes, idComment:comment.idcomment },
                                }">
              edit
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../../../services/RecipeDataService";

export default {
  name: "individualRecipe",
  data() {
    return {
      currentRecipe: {},
      message: ''
    };
  },
  methods: {
    getMyRecipe() {
      const idusers = this.currentUser.id;
      const idrecipes = this.$route.params.idrecipes;
      RecipeDataService.getIndividual(idusers, idrecipes)
          .then(response => {
            this.currentRecipe = response.data;
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
    }
  },
  mounted() {
    if (!this.currentUser || !this.$route.params.idrecipes) {
      this.alert();
    } else {
      this.message = '';
      this.getMyRecipe();
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