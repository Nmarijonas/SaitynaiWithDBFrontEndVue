<template>
  <div class="col-md-12">
    <div class="card-container card">
      <div class="submit-form">
        <div v-if="!submitted">
          <h4 style="margin-top: 10px; text-align: center; color: greenyellow">Update recipe</h4>
          <div class="form-group">
            <label for="title">Title</label>
            <input
                type="text"
                class="form-control"
                id="title"
                v-validate="'required'"
                v-model="recipe.title"
                name="title"
            />
            <!--suppress JSUnresolvedVariable -->
            <div
                v-if="errors.has('title')"
                class="alert alert-danger"
                role="alert"
            >This field is required!
            </div>
          </div>

          <div class="form-group">
            <label for="ingredients">Ingredients</label>
            <textarea
                class="form-control"
                id="ingredients"
                v-validate="'required'"
                v-model="recipe.ingredients"
                cols="10"
                rows="5"
                name="ingredients"
            />
            <!--suppress JSUnresolvedVariable -->
            <div
                v-if="errors.has('ingredients')"
                class="alert alert-danger"
                role="alert"
            >This field is required!
            </div>
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea
                class="form-control"
                id="description"
                required
                v-model="recipe.description"
                cols="10"
                rows="5"
                name="description"
            />
          </div>

          <div class="form-group">
            <label for="recipe">Recipe</label>
            <textarea
                class="form-control"
                id="recipe"
                v-validate="'required'"
                v-model="recipe.recipe"
                cols="10"
                rows="5"
                name="recipe"
            />
            <!--suppress JSUnresolvedVariable -->
            <div
                v-if="errors.has('recipe')"
                class="alert alert-danger"
                role="alert"
            >This field is required!
            </div>
          </div>

          <div class="check-box">
            <label for="published"> Show to public? </label>
            <input
                type="checkbox"
                id="published"
                v-model="recipe.published"
                name="recipe"
                value="true"
            />
          </div>

          <button @click="updateRecipe" class="btn btn-success">Update</button>
          <button @click="deleteRecipe" class="btn btn-danger">Delete</button>
        </div>

        <div v-else>
          <h4>Recipe updated successfully!</h4>
          <button class="btn btn-success" @click="newRecipe">Back to my recipes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../../../services/RecipeDataService";
import authHeader from "@/services/auth-header";

export default {
  name: "update-recipe",
  data() {
    return {
      recipe: {},
      submitted: false
    };
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
      this.$swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You don\' have access. Please login!',
        footer: '<a href="https://en.wikipedia.org/wiki/Login">Why do I have this issue?</a>'
      })
    } else {
      this.getMyRecipe()
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    deleteRecipe() {
      const userId = this.currentUser.id;
      const recipeId = this.recipe.idrecipes;
      this.$swal({
        title: "Delete this recipe?",
        text: "Are you sure? You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Delete it!"
      }).then((result) => {
        if (result.value) {
          RecipeDataService.delete(userId, recipeId, authHeader())
              .then(response => {
                this.recipe.id = response.data.id;
                console.log(response.data);
                this.submitted = true;
              })
              .catch(e => {
                console.log(e);
              });
        }
      })
    },
    updateRecipe() {
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return
        }
        const userId = this.currentUser.id;
        const recipeId = this.recipe.idrecipes;
        const data = {
          title: this.recipe.title,
          ingredients: this.recipe.ingredients,
          description: this.recipe.description,
          recipe: this.recipe.recipe,
          published: this.recipe.published
        };

        RecipeDataService.update(userId, recipeId, data, authHeader())
            .then(response => {
              this.recipe.id = response.data.id;
              console.log(response.data);
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
      });
    },
    getMyRecipe() {
      const idusers = this.currentUser.id;
      const idrecipes = this.$route.params.idrecipes;
      RecipeDataService.getIndividual(idusers, idrecipes)
          .then(response => {
            this.recipe = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },
    newRecipe() {
      this.$router.push('/myRecipes');
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 20px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 50px auto 25px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
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