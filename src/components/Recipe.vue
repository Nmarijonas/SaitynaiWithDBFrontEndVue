<template>
  <div class="col-md-12">
    <div class="card card-container">
      <h4 style="margin-top: 10px; text-align: center; color: greenyellow">Recipe</h4>
      <div style="text-align: left">
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
          <label><strong>Published:</strong></label> {{ currentRecipe.published }}
        </div>
      </div>
      <h4 style="margin-top: 10px; text-align: center; color: greenyellow">Comments</h4>
      <div style="text-align: left">
      <li id style="list-style-type: circle" class="list-items" v-for="(comment, index) in currentRecipe.comments"
          :key="index">
        {{ comment.title }}. {{ comment.comment }}
      </li>
    </div>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "recipe",
  data() {
    return {
      currentRecipe: {},
      message: ''
    };
  },
  methods: {
    getRecipe(idrecipes) {
      RecipeDataService.get(idrecipes)
          .then(response => {
            this.currentRecipe = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getRecipe(this.$route.params.idrecipes);
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