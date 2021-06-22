<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
       Profile: <strong>{{currentUser.username}}</strong> 
      </h3>
    </header>
   
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};

</script>