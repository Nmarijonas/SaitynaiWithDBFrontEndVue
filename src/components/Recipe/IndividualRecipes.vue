<template>
  <div class="list container">
    <h1>Recipes</h1>
    <ul id="recipesListId">
      <li id="recipesItemId" v-for="(recipe,index) in recipes" :key="index">
        <router-link class="link-items" :to="{
                                    name: 'recipe-details',
                                    params: {idrecipes: recipe.idrecipes },
                                }">
          {{ recipe.title }}
        </router-link>
      </li>
    </ul>

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
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveRecipes();
    },
  },
  mounted() {
    this.retrieveRecipes();
  }
};
</script>

<style>

.list {
  margin-top: 10px;
  max-width: 350px;
  padding: 40px 20px;
}

h1 {
  color: greenyellow;
  letter-spacing: 1px;
}

#recipesListId {
  margin: 0;
  padding: 0;
  text-align: left;
}

@media screen and (max-width: 759px) {
  .list {
    position: absolute;
    left: 70px;
    right: 10px;
    margin: 50px auto 25px;
  }

  #recipesListId #recipesItemId {
    border: 1px solid greenyellow;
  }

  #recipesItemId {
    font-size: 20px;
    text-align: center;
  }
}

</style>