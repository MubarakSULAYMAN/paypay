<template>
  <div>
    <h6>Activity page</h6>
  </div>
</template>

<script>
export default {
  name: "ActivityPage",

  created() {
    this.$store.dispatch("breadcrumbs/updateBreadCrumbs", [
      { text: "Activity" },
    ]);
  },
};
</script>

<style lang="scss" scoped></style>
