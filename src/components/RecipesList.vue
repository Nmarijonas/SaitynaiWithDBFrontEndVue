<template>
  <div class="col-md-12">
    <div class="listRecipes listRecipes-container">
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