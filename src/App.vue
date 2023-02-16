<template>
  <div id="q-app">
    <router-view />
    <div style="background-color: red">
      <h6>Users</h6>
      <ul id="users">
        <li v-for="user in users" v-bind:key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      users: [],
    };
  },

  created() {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        this.users = json.users;
      });
  },
};
</script>
