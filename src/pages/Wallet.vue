<template>
  <div>
    <h6>Wallet page</h6>
  </div>
</template>

<script>
export default {
  name: "WalletPage",

  created() {
    this.$store.dispatch("breadcrumbs/updateBreadCrumbs", [
      { text: "Wallet" },
    ]);
  },
};
</script>

<style lang="scss" scoped></style>
