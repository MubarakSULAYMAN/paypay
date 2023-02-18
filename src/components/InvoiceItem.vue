<template>
  <section class="invoice-item">
    <div
      class="full-width row wrap justify-between items-start content-center q-my-md"
    >
      <div class="">
        <div class="text-weight-medium pp-item-title">Item Details</div>
        <div class="text-pp-gray">Type Item for Hours item.</div>
      </div>
      <div class="pp-purple">
        <q-btn
          unelevated
          no-caps
          icon="tune"
          color="pp-purple-fade"
          text-color="pp-purple-fade"
          class="customize q-mt-sm q-mt-md-none text-weight-medium"
          label="Customize"
        />
      </div>
    </div>

    <aside class="table-item">
      <div class="table-header full-width row q-mb-sm q-py-sm text-pp-gray">
        <span class="item-name-h">Item Name</span>
        <span class="hours-h">Hours</span>
        <span class="rate-h">Rate/hr</span>
        <span class="tax-h">Tax</span>
        <span class="line-total-h">Line Total</span>
        <span class="extra-h"></span>
      </div>
      <div class="table-body">
        <div class="row full-width q-py-sm">
          <q-input
            v-model="invoiceItem.name"
            placeholder="Description"
            filled
            round
            dense
            class="table-input item-name"
          />

          <q-input
            v-model.number="invoiceItem.duration"
            type="number"
            min="0"
            filled
            round
            dense
            class="table-input hours"
          />

          <q-input
            outlined
            v-model.number="invoiceItem.rate"
            placeholder="0"
            type="number"
            min="0"
            prefix="$"
            round
            dense
            class="table-input rate"
          />

          <q-input
            outlined
            v-model.number="invoiceItem.tax"
            placeholder="0"
            type="number"
            min="0"
            prefix="$"
            round
            dense
            class="table-input tax"
          />

          <q-input
            outlined
            v-model.number="invoiceItem.lineTotal"
            type="number"
            min="0"
            prefix="$"
            round
            dense
            class="table-input line-total"
          />

          <div class="extra">
            <q-btn
              round
              color="pp-purple"
              icon="fa-solid fa-plus"
              class="add-item"
              @click="addInvoiceItem"
            />
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  name: "InvoiceItem",

  data() {
    return {
      invoiceItem: {
        name: "",
        duration: 0,
        rate: 0,
        tax: 0,
        lineTotal: 0,
      },
    };
  },

  watch: {
    invoiceItem: {
      handler(newValue, oldValue) {
        this.$emit("updateInvoiceRecord", newValue);
      },

      deep: true,
    },
  },

  methods: {
    addInvoiceItem() {
      alert("Function not clearly stated");
    },
  },
};
</script>

<style lang="scss" scoped>
.invoice-item {
  .customize {
    border-radius: 5px;
  }

  .table-item {
    .table-header {
      border-top: 1px solid $pp-gray-fade;
      border-bottom: 1px solid $pp-gray-fade;
    }

    .table-header,
    .table-input,
    input {
      font-weight: 500;
    }

    .table-header *:not(:last-child),
    .table-body .row *:not(:last-child) {
      margin-right: 2rem;
    }

    .item-name-h,
    .item-name {
      width: 36%;
    }

    .hours-h,
    .hours {
      width: 10%;
    }

    .rate-h,
    .rate,
    .tax-h,
    .tax {
      width: 12%;
    }

    .line-total-h,
    .line-total {
      width: 16%;
    }

    .extra-h,
    .extra {
      width: 2%;
    }

    .add-item {
      transform: scale(0.65);
    }
  }
}

@media screen and (max-width: 1400px) {
  .table-header *:not(:last-child),
  .table-body .row *:not(:last-child) {
    margin-right: 1rem !important;
  }
}

@media screen and (max-width: 420px) {
  .item-name-h,
  .item-name {
    width: 360px !important;
  }

  .hours-h,
  .hours {
    width: 100px !important;
  }

  .rate-h,
  .rate,
  .tax-h,
  .tax {
    width: 120px !important;
  }

  .line-total-h,
  .line-total {
    width: 160px !important;
  }

  .extra-h,
  .extra {
    width: 20px !important;
  }
}
</style>
