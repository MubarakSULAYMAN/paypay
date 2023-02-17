<template>
  <div>
    <h6>Invoices page</h6>
  </div>
</template>

<script>
export default {
  name: "InvoicesPage",

  data() {
    return {
      invoiceDetails: {
        invoiceNumber: "INV-2022-010",
      },
    };
  },

  computed: {
    breadcrumbs() {
      return [
        { text: "Invoices", link: "/app/invoices" },
        { text: `edit invoice(${this.invoiceDetails.invoiceNumber})` },
      ];
    },
  },

  created() {
    this.$store.dispatch("breadcrumbs/updateBreadCrumbs", this.breadcrumbs);
  },
};
</script>

<style lang="scss" scoped></style>
