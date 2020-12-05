<template>
  <nav :style="{background: background || '#333'}">
    <ul :style="{background: background || '#333'}" ref="nav">
      <figure class="image-logo" @click="toggleNav">
        <img :src="imagePath" height="40px" width="40px" alt="site logo"/>
      </figure>
      <li v-for="(link, index) in navBar"
          :key="index"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
          @mouseleave="$event.currentTarget.style.background = background || '#333'"
      >
        <router-link
            :to="link.path"
            :style="{color: linkColor || '#ddd'}"
        >
          {{ link.text }}
          <ion-icon v-bind:name="link.icon" class="linkIcon"></ion-icon>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath', 'currentUser'],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList
      nav.contains('active') ? nav.remove('active') : nav.add('active')
    }
  },
  computed: {
    navBar: function () {
      const user = 'ROLE_USER';
      const admin = 'ROLE_ADMIN';
      let userRole = '';
      if (this.currentUser !== null) {
        userRole = this.currentUser.roles[0];
      }
      if (this.currentUser === null) {
        return this.notLoggedIn;
      } else if (userRole === user) {
        return this.loggedInUser;
      } else if (userRole === admin) {
        return this.loggedInAdmin;
      } else {
        return this.notLoggedIn;
      }
    },
    loggedInUser: function () {
      return this.navLinks.filter(function (link) {
        return link.role[1] === 'user'
      })
    },
    loggedInAdmin: function () {
      return this.navLinks.filter(function (link) {
        return link.role[2] === 'admin'
      })
    },
    notLoggedIn: function () {
      return this.navLinks.filter(function (link) {
        return link.role[0] === 'guest';
      })
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  height: 60px;
  width: 100%;

  ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #adff2f;

    figure {
      cursor: pointer;
      margin-right: 10px;
    }

    li {
      list-style-type: none;
      padding: 10px 20px;
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    .linkIcon {
      margin-right: 10px;
      font-size: 22px;
    }
  }
}

@media screen and (max-width: 759px) {
  nav {
    width: 100%;

    ul {
      position: absolute;
      width: 300px;
      flex-direction: column;
      left: -240px;
      transition: 200ms ease all;
      top: 60px;
      height: 100%;
      z-index: 1;

      &.active {
        left: 0;
      }

      figure {
        position: absolute;
        width: 100%;
        z-index: 1;
        top: -50px;
        left: 110px;
      }

      li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }

      a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 13px;
      }
    }
  }

}

</style>