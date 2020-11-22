<template>
  <div class="list row">
    <div class="col-md-10">
      <h4>Recipes List</h4>
      <ul>
        <li v-for="(recipe, index) in recipes" :key="index">
          <router-link :to="{
                            name: 'recipe-details',
                            params: {idrecipes: recipe.idrecipes },
                        }">
            {{ recipe.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <router-view @refreshData="refreshList"></router-view>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "@/services/RecipeDataService";

export default {
  name: "recipes-list",
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    retrieveRecipes() {
      RecipeDataService.getAll()
          .then(response => {
            this.recipes = response.data; // JSON are parsed automatically.
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveRecipes();
    },
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveRecipes();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 500px;
  margin: auto;
}
</style>