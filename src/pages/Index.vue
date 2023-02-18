<template>
  <q-page class="flex flex-center">
    <p>Redirecting...</p>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",

  created() {
    this.$router.replace("/app/invoices");
  },
};
</script>
