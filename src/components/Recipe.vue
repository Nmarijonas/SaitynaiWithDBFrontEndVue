<template>
  <div class="recipeItem container">
    <h4 style="margin-top: 10px; text-align: center">Recipe</h4>
    <div class="recipe-info">
      <div v-if="this.$route.params.idrecipes">
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
      <!--      <div class="comment-info">-->
      <!--        <div class="list list-container">-->
      <!--          <ul style="list-style-type: none">-->
      <!--            <li class="list-items" v-for="(comment, index) in currentRecipe.comments" :key="index">-->
      <!--              <router-link :to="{-->
      <!--                            name: 'recipe-details',-->
      <!--                            params: {idrecipes: recipe.idrecipes },-->
      <!--                        }">-->
      <!--                {{ recipe.title }}-->
      <!--              </router-link>-->
      <!--            </li>-->
      <!--          </ul>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <!--    <div class="commentItem container">-->
    <h4 style="margin-top: 10px; text-align: center">Comments</h4>
    <div class="recipe-info">
      <li style="list-style-type: none" class="list-items" v-for="(comment, index) in currentRecipe.comments"
          :key="index">
        {{ comment.comment }}
        <!--        <router-link :to="{-->
        <!--                            name: 'recipe-details',-->
        <!--                            params: {idrecipes: recipe.idrecipes },-->
        <!--                        }">-->
        <!--          {{ recipe.title }}-->
        <!--        </router-link>-->
      </li>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "recipe",
  data() {
    return {
      currentRecipe: null,
      message: ''
    };
  },
  methods: {
    getRecipe(idrecipes) {
      RecipeDataService.get(idrecipes)
          .then(response => {
            this.currentRecipe = response.data;
            console.log(response.data);
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

<style>
div.recipe-info {
  padding: 10px 30px;
  text-align: left;
  width: 100%;
  max-width: 500px;
  margin: 25px auto;
}

@media screen and (max-width: 759px) {
  div.recipe-info {
    margin-left: 70px;
    width: 80%;
  }
}
</style>