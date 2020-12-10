<template>
  <div class="col-md-12">
    <div class="card-container card">
      <div class="submit-form">
        <div v-if="!submitted">
          <h4 style="margin-top: 10px; text-align: center; color: greenyellow">Creating new recipe</h4>
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

          <button @click="saveRecipe" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
          <h4>Recipe created!</h4>
          <button class="btn btn-success" @click="newRecipe">Create one more?</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../../../services/RecipeDataService";
import authHeader from "@/services/auth-header";

export default {
  name: "add-recipe",
  data() {
    return {
      recipe: {
        id: null,
        title: "",
        ingredients: "",
        description: "",
        recipe: "",
        published: "false"
      },
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
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    saveRecipe() {
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return
        }
        const userId = this.currentUser.id;
        const data = {
          title: this.recipe.title,
          ingredients: this.recipe.ingredients,
          description: this.recipe.description,
          recipe: this.recipe.recipe,
          published: this.recipe.published
        };

        RecipeDataService.create(userId, data, authHeader())
            .then(response => {
              this.recipe.id = response.data.id;
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
      });
    },
    newRecipe() {
      this.submitted = false;
      this.recipe = {};
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
  border: none;
  padding: 20px 25px 30px;
  margin: 50px auto 25px;
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