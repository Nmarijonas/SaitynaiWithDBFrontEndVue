<template>
  <h1>Logout</h1>
</template>

<script>
export default {
  data() {
    return {}
  },
  created: function () {
    this.$store.dispatch('auth/logout');
    this.$router.push('/login');
  }
}
</script>