<template>
  <div id="q-app">
    <router-view />
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
