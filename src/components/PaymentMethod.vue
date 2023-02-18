<template>
  <section class="row wrap justify-between items-start content-center">
    <div class="payment-method col-12 col-md-6">
      <div
        class="payment-header row wrap justify-between items-start content-center"
      >
        <span class="text-weight-medium q-py-sm pp-item-title">
          Payment Method
        </span>

        <q-btn
          flat
          no-caps
          color="pp-purple"
          label="Select Payment"
          @click="dialogOpen = true"
        />
      </div>

      <q-dialog
        v-model="dialogOpen"
        persistent
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card class="bg-pp-purple-light text-white">
          <q-bar>
            <span>Select a payment method</span>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-pp-purple"
                >Close</q-tooltip
              >
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-h6">Pay with:</div>
          </q-card-section>

          <q-card-section class="q-pt-none q-gutter-sm">
            <q-btn
              v-bind="option"
              v-for="(option, index) in paymentOptions"
              :key="index"
              @click="updateOption(option.label)"
            />
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-card flat class="payment-summary-card bg-pp-gray-light">
        <q-card-section>
          <div
            class="full-width row wrap justify-between items-start content-center"
          >
            <span class="text-weight-medium">
              {{ selectedPaymentOption === "Cash" ? "Cash" : "Wire transfer" }}
            </span>
            <q-icon size="sm" :name="selectedIcon" />
          </div>

          <q-card-section class="full-width q-mt-sm q-pa-none">
            <div>
              <span class="q-mr-xs text-pp-gray">Account Name:</span>
              <span class="text-weight-medium">
                {{ accountDetails?.accountName }}
              </span>
            </div>

            <div>
              <span class="q-mr-xs text-pp-gray">Account Number:</span>
              <span class="text-weight-medium">
                {{ addSpaceToText(accountDetails?.accountNumber) }}
              </span>
            </div>

            <div>
              <span class="q-mr-xs text-pp-gray">Account Name:</span>
              <span class="text-weight-medium">
                {{ accountDetails?.routingNumber }}
              </span>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="subtotal-view col-12 col-md-6">
      <div class="row wrap justify-between items-start content-center">
        <span>Sub Total</span>
        <span class="text-weight-medium">{{ formatCurrency(subTotal) }} </span>
      </div>

      <div class="row wrap justify-between items-start content-center">
        <span class="text-pp-gray">Discount</span>
        <span class="text-weight-medium">
          {{ availableDiscount }}
        </span>
      </div>

      <div class="row wrap justify-between items-start content-center">
        <span class="text-pp-gray">Total tax</span>
        <span class="text-weight-medium">{{ formatCurrency(tax) }} </span>
      </div>

      <div
        class="total-amount row wrap justify-between items-start content-center pp-item-title q-mt-lg q-mt-md-lg"
      >
        <span class="text-pp-gray">Total Amount</span>
        <span class="text-weight-bold">{{ total }} </span>
      </div>
    </div>
  </section>
</template>

<script>
// import { addSpaceToText, formatCurrency } from "boot/helpers";

export default {
  name: "PaymentMethod",

  props: {
    tax: {
      type: Number,
      default: 0,
    },

    subTotal: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      dialogOpen: false,

      paymentOptions: [],

      selectedPaymentOption: "Google Pay",

      accountDetails: undefined,

      userDiscount: 0,
    };
  },

  computed: {
    selectedIcon() {
      return this.paymentOptions?.find(
        (option) => option.label === this.selectedPaymentOption
      )?.iconRight;
    },

    availableDiscount() {
      return this.formatCurrency(
        this.userDiscount > 0
          ? Number(`-${this.userDiscount}`)
          : this.userDiscount
      );
    },

    total() {
      return this.formatCurrency(
        Number(this.subTotal) - Number(this.userDiscount) + Number(this.tax)
      );
    },
  },

  created() {
    fetch("/api/resources/payment-options")
      .then((res) => res.json())
      .then((jsonRes) => {
        this.paymentOptions = jsonRes;
      });

    fetch("/api/user/misc")
      .then((res) => res.json())
      .then((jsonRes) => {
        this.userDiscount = jsonRes.discount;
      });

    fetch("/api/user/payment/card/details")
      .then((res) => res.json())
      .then((jsonRes) => {
        this.accountDetails = jsonRes;
      });
  },

  methods: {
    updateOption(option) {
      this.selectedPaymentOption = option;
    },

    addSpaceToText(text) {
      return text?.replace(/.{4}/g, "$& ").trim();
    },

    formatCurrency(
      amount,
      currencyName = "USD",
      languageLocale = "en-US",
      isGrouped = true
      // maximumSignificantDigits = 3
    ) {
      return Intl.NumberFormat(languageLocale, {
        style: "currency",
        currency: currencyName,
        useGrouping: isGrouped,
        // maximumSignificantDigits: maximumSignificantDigits,
      }).format(amount);
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-summary-card {
  width: 400px;
}

.subtotal-view {
  width: 300px;
  height: 500px;
  line-height: 2;
}

.total-amount {
  border-top: 1px solid $pp-gray-fade;
}

@media screen and (max-width: 420px) {
  .payment-summary-card {
    width: 286px;
  }
}

@media screen and (min-width: 720px) {
  .payment-header {
    width: 420px;
  }
}
</style>
