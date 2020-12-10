<template>
  <div class="col-md-12">
    <div class="card-container card">
      <div class="submit-form">
        <div v-if="!submitted">
          <h4 style="margin-top: 10px; text-align: center; color: greenyellow">Update Comment</h4>
          <div class="form-group">
            <label for="title">Title</label>
            <input
                type="text"
                class="form-control"
                id="title"
                v-validate="'required'"
                v-model="comment.title"
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
            <label for="comment">Comment</label>
            <textarea
                class="form-control"
                id="comment"
                v-validate="'required'"
                v-model="comment.comment"
                cols="10"
                rows="5"
                name="comment"
            />
            <!--suppress JSUnresolvedVariable -->
            <div
                v-if="errors.has('comment')"
                class="alert alert-danger"
                role="alert"
            >This field is required!
            </div>
          </div>

          <button @click="updateComment" class="btn btn-success">Update</button>
          <button @click="deleteComment" class="btn btn-danger">Delete</button>
        </div>

        <div v-else>
          <h4>Comment updated successfully!</h4>
          <router-link class="link-items" :to="{
                                    name: 'myRecipe-details',
                                    params: {idrecipes: recipe.idrecipes },
                                }">
            <button class="btn btn-success">Back to my recipe</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../../../services/RecipeDataService";
import authHeader from "@/services/auth-header";
import CommentDataService from "@/services/CommentDataService";

export default {
  name: "update-comment",
  data() {
    return {
      recipe: {},
      comment: {},
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
      this.getMyRecipe();
      this.getMyComment();
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    deleteComment() {
      const userId = this.currentUser.id;
      const recipeId = this.recipe.idrecipes;
      const commendId = this.comment.idcomment;
      this.$swal({
        title: "Delete this recipe?",
        text: "Are you sure? You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Delete it!"
      }).then((result) => {
        if (result.value) {
          CommentDataService.deleteComment(userId, recipeId, commendId, authHeader())
              .then(response => {
                this.comment.id = response.data.id;
                this.submitted = true;
              })
              .catch(e => {
                console.log(e);
              });
        }
      })
    },
    updateComment() {
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return
        }
        const userId = this.currentUser.id;
        const recipeId = this.recipe.idrecipes;
        const commendId = this.comment.idcomment;
        const data = {
          title: this.comment.title,
          comment: this.comment.comment
        };

        CommentDataService.updateComment(userId, recipeId, commendId, data, authHeader())
            .then(response => {
              this.recipe.id = response.data.id;
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
    getMyComment() {
      const idusers = this.currentUser.id;
      const idrecipes = this.$route.params.idrecipes;
      const idComment = this.$route.params.idComment;
      CommentDataService.getIndividualRecipeComment(idusers, idrecipes, idComment)
          .then(response => {
            this.comment = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },
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