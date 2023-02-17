<template>
  <div>
    <h6>Help page</h6>
  </div>
</template>

<script>
export default {
  name: "HelpPage",

  created() {
    this.$store.dispatch("breadcrumbs/updateBreadCrumbs", [
      { text: "Help" },
    ]);
  },
};
</script>

<style lang="scss" scoped></style>
