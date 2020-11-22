<template>
  <div v-if="currentRecipe">
    <h4>Recipe</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
               v-model="currentRecipe.title"/>
      </div>
    </form>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Recipe...</p>
  </div>
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
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>