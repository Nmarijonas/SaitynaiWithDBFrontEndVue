<!--<template>-->
<!--  <div class="col-md-11">-->
<!--    <h1>Recipes List</h1>-->
<!--    <div class="list list-container">-->
<!--      <ul style="list-style-type: none">-->
<!--        <li class="list-items" v-for="(recipe, index) in recipes" :key="index">-->
<!--          <router-link class="link-items" :to="{-->
<!--                            name: 'recipe-details',-->
<!--                            params: {idrecipes: recipe.idrecipes },-->
<!--                        }">-->
<!--            {{ recipe.title }}-->
<!--          </router-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    <div class="col-md-6">-->
<!--      <router-view @refreshData="refreshList"></router-view>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

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
  /*#recipesListId {*/
  /*  !*border: 2px solid gray;*!*/
  /*  !*margin-top: 10px;*!*/
  /*  !*left: 70px;*!*/
  /*  !*right: 10px;*!*/
  /*  !*!*height: 50px;*!*!*/
  /*  !*text-align: left;*!*/
  /*  position: absolute;*/
  /*  left: 70px;*/
  /*  right: 10px;*/
  /*  margin: 0 auto 25px;*/
  /*}*/

  #recipesListId #recipesItemId {
    border: 1px solid greenyellow;
  }

  #recipesItemId {
    font-size: 20px;
    text-align: center;
  }
}

</style>