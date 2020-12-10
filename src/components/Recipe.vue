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
          <label><strong>Published:</strong></label> {{ currentRecipe.published ? "Published" : "Pending" }}
        </div>
      </div>
      <h4 style="margin-top: 10px; text-align: center; color: greenyellow">Comments</h4>
      <div style="text-align: left">
        <ul>
          <li id="individualComment" style="list-style-type: circle" class="list-items"
              v-for="(comment, index) in comments"
              :key="index">
            {{ comment.title }}. {{ comment.comment }}
          </li>
        </ul>
      </div>
      <div v-if="currentUser">
        <div style="margin-top: 20px" class="form-group">
          <textarea placeholder="Title" rows="1"
                    id="title"
                    class="form-control"
                    v-validate="'required'"
                    v-model="recipeComment.title"
                    name="title"
          ></textarea>
          <div
              v-if="errors.has('title')"
              class="alert alert-danger"
              role="alert"
          >This field is required!
          </div>
          <textarea placeholder="Comment" rows="1"
                    id="comment"
                    class="form-control"
                    v-validate="'required'"
                    v-model="recipeComment.comment"
                    name="comment"
          ></textarea>
          <div
              v-if="errors.has('comment')"
              class="alert alert-danger"
              role="alert"
          >This field is required!
          </div>
          <button @click="commentRecipe" class="btn btn-success">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../services/RecipeDataService";
import authHeader from "@/services/auth-header";
import CommentDataService from "@/services/CommentDataService";

export default {
  name: "recipe",
  data() {
    return {
      comments: [],
      currentRecipe: {},
      commentOwner: false,
      recipeComment: {
        title: "",
        comment: ""
      },
      recipeOwnerId: '',
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
    },
    getComments(idrecipes) {
      CommentDataService.getAllRecipeComments(idrecipes).then(response => {
        this.comments = response.data;
      }).catch(e => {
        console.log(e);
      });
    },
    commentRecipe() {
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return
        }
        CommentDataService.create(this.recipeOwnerId, this.currentRecipe.idrecipes,
            this.recipeComment, authHeader()).then(response => {
          this.comments.push(response.data);
        }).catch(e => {
          console.log(e);
        });
      });
    },
    getRecipeOwner(idrecipes) {
      RecipeDataService.getRecipeOwnerId(idrecipes, authHeader()).then(response => {
        this.recipeOwnerId = response.data;
      }).catch(e => {
        console.log(e);
      });
    }
    // getCommentOwner(commentId) {
    //   CommentDataService.getCommentOwner(this.currentRecipe.idrecipes, commentId).then(response => {
    //     return response.data;
    //   }).catch(e => {
    //     console.log(e);
    //   });
    // }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    this.message = '';
    this.getRecipe(this.$route.params.idrecipes);
    this.getRecipeOwner(this.$route.params.idrecipes);
    this.getComments(this.$route.params.idrecipes);
  }
}
;
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