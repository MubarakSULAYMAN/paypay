<template>
  <div>
    <h6>Dashboard page</h6>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",

  created() {
    this.$store.dispatch("breadcrumbs/updateBreadCrumbs", [
      { text: "Dashboard" },
    ]);
  },
};
</script>

<style lang="scss" scoped></style>
