<template>
  <div class="col-md-12">
    <div class="card-container card">
      <div class="submit-form">
        <div v-if="!submitted">
          <h4 style="margin-top: 10px; text-align: center; color: greenyellow">Update user</h4>
          <div class="form-group">
            <label for="username">Username</label>
            <input
                type="text"
                class="form-control"
                id="username"
                v-validate="'required'"
                v-model="currentViewUser.username"
                name="username"
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
            <!--suppress XmlInvalidId -->
            <label for="password">Password</label>
            <input
                v-model="currentViewUser.password"
                v-validate="'required'"
                type="password"
                class="form-control"
                name="password"
                ref="password"
            />
            <!--suppress JSUnresolvedVariable -->
            <div
                v-if="errors.has('password')"
                class="alert alert-danger"
                role="alert"
            >Password is required!
            </div>
          </div>
          <div class="form-group">
            <!--suppress XmlInvalidId -->
            <label for="repeat_password">Repeat Password</label>
            <input
                v-model="currentViewUser.repeated_password"
                v-validate="'required|confirmed:password'"
                type="password"
                data-vv-as="password"
                class="form-control"
                name="repeat_password"
            >
            <div
                v-if="errors.has('repeat_password')"
                class="alert alert-danger"
                role="alert"
            >{{ errors.first('repeat_password') }}
            </div>
          </div>
          <div class="form-group">
            <!--suppress XmlInvalidId -->
            <label for="role">Role</label>
            <select v-model="pickedRole" name="role">
              <option value="user" selected>user</option>
              <option value="admin">admin</option>
            </select>
          </div>

          <button @click="updateUser" class="btn btn-success">Update</button>
          <button @click="deleteUser" class="btn btn-danger">Delete</button>
        </div>

        <div v-else>
          <h4>Recipe updated successfully!</h4>
          <button class="btn btn-success" @click="userList">Back to users list</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!--suppress JSUnresolvedVariable -->
<script>
import authHeader from "@/services/auth-header";
import UserDataService from "@/services/UserDataService";

export default {
  name: "update-user",
  data() {
    return {
      pickedRole: "user",
      currentViewUser: {},
      submitted: false
    };
  },
  methods: {
    deleteUser() {
      const userId = this.currentViewUser.idUsers;
      this.$swal({
        title: "Delete this user?",
        text: "Are you sure? You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Delete it!"
      }).then((result) => {
        if (result.value) {
          UserDataService.deleteUser(userId, authHeader())
              .then(response => {
                this.currentViewUser.id = response.data.id;
                this.submitted = true;
              })
              .catch(e => {
                console.log(e);
              });
        }
      })
    },
    updateUser() {
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return
        }
        const userId = this.currentViewUser.idUsers;
        const data = {
          username: this.currentViewUser.username,
          password: this.currentViewUser.password,
          role: [this.pickedRole]
        };

        UserDataService.updateUser(userId, data, authHeader())
            .then(response => {
              this.currentViewUser.id = response.data.id;
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
      });
    },
    getCurrentViewUser() {
      const idusers = this.$route.params.idusers;
      UserDataService.get(idusers, authHeader())
          .then(response => {
            this.currentViewUser = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },
    alert() {
      this.$swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You don\' have access. Please login!',
        footer: '<a href="https://en.wikipedia.org/wiki/Login">Why do I have this issue?</a>'
      })
      this.$router.push('/login');
    },
    userList() {
      this.$router.push('/users');
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.alert();
    } else if (this.currentUser.roles[0] !== "ROLE_ADMIN") {
      this.alert();
    } else {
      this.getCurrentViewUser()
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