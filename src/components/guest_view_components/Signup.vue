<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
          id="profile-img"
          src="https://us.123rf.com/450wm/robuart/robuart1806/robuart180600238/102261218-stock-vector-moustached-smiling-chief-cooker-avatar-profile.jpg?ver=6"
          alt="avatar_2x"
          class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleSignup">
        <div class="form-group">
          <label>Username</label>
          <label>
            <input
                v-model="user.username"
                v-validate="'required'"
                type="text"
                class="form-control"
                name="username"
            />
          </label>
          <!--suppress JSUnresolvedVariable -->
          <div
              v-if="errors.has('username')"
              class="alert alert-danger"
              role="alert"
          >Username is required!
          </div>
        </div>

        <div class="form-group">
          <label>Password</label>
          <label>
            <input
                v-model="user.password"
                v-validate="'required'"
                type="password"
                class="form-control"
                name="password"
                ref="password"
            />
          </label>
          <!--suppress JSUnresolvedVariable -->
          <div
              v-if="errors.has('password')"
              class="alert alert-danger"
              role="alert"
          >Password is required!
          </div>
        </div>

        <div class="form-group">
          <label>Repeat Password</label>
          <label>
            <input
                v-model="user.repeated_password"
                v-validate="'required|confirmed:password'"
                type="password"
                data-vv-as="password"
                class="form-control"
                name="repeat_password"
            >
          </label>
          <!--suppress JSUnresolvedVariable -->

          <div
              v-if="errors.has('repeat_password')"
              class="alert alert-danger"
              role="alert"
          >{{ errors.first('repeat_password') }}
          </div>

          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{ message }}</div>
        </div>
      </form>
      <i style="font-size: 15px; margin-top: 40px;">Already have account?</i>
      <router-link :to="{
                             name: 'login'
                        }">
        <a style="font-size: 15px; color: greenyellow; background-color: gray">Login </a>
      </router-link>
    </div>
  </div>
</template>

<script>
// import {required, minLength, sameAs} from "vee-validate"
import User from '../../models/user';

export default {
  name: "Signup",
  data() {
    return {
      user: new User('', '', ''),
      loading: false,
      message: ''
    };
  },
  methods: {
    alert() {
      this.$router.push('/login');
      this.$swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'Now login and create some recipes!',
      })
    },
    handleSignup() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/signup', this.user).then(
              () => {
                this.alert();
              },
              error => {
                this.loading = false;
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
              }
          );
        }
      });
    }
  },

};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
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

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
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