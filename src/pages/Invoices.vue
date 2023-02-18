<template>
  <div class="invoice-view">
    <section class="row">
      <div class="col-xs-12 col-md-8">
        <div class="row">
          <img src="/images/logo.jpg" alt="" class="user-avatar q-mr-md" />
          <div class="row">
            <div class="username col-12 text-black text-weight-medium">
              {{ customerdetails.user.name }}
            </div>
            <Address>
              <div class="user-email col-12 text-pp-gray">
                {{ customerdetails.user.email }}
              </div>
            </Address>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4 text-pp-gray">
        <Address>
          <div>{{ customerdetails.address.houseAddress }}</div>
        </Address>
        <Address>
          <div>
            {{
              `${customerdetails.address.city}, ${customerdetails.address.postCode}`
            }}
          </div>
        </Address>
        <Address>
          <div>
            {{
              `${customerdetails.address.state}, ${customerdetails.address.country}`
            }}
          </div>
        </Address>
      </div>
    </section>

    <section
      class="invoice-summary row q-mt-xs q-mt-md-md q-pa-md q-pa-md-lg bg-pp-purple text-white"
    >
      <div class="col-12 col-md-8">
        <div class="text-weight-medium">Invoice Number</div>
        <div>{{ invoiceDetails.invoiceNumber }}</div>
        <div>
          <span class="q-mr-sm text-weight-light">Issued Date:</span>
          <span>{{ invoiceDetails.issuedDate }}</span>
        </div>
        <div>
          <span class="q-mr-sm text-weight-light">Due Date:</span>
          <span>{{ invoiceDetails.dueDate }}</span>
        </div>
      </div>
      <div class="col-12 col-md-2 q-mt-md q-mt-md-none">
        <div class="text-weight-medium">Billed to</div>
        <div class="text-weight-light">
          {{ invoiceDetails.billingAddress.name }}
        </div>
        <Address class="text-weight-light">
          <div>{{ invoiceDetails.billingAddress.address }}</div>
        </Address>
        <Address class="text-weight-light">
          <div>
            {{
              `${invoiceDetails.billingAddress.city}, ${invoiceDetails.billingAddress.country}`
            }}
          </div>
        </Address>
      </div>
    </section>

    <InvoiceItem />

    <PaymentMethod />
  </div>
</template>

<script>
import InvoiceItem from "components/InvoiceItem.vue";
import PaymentMethod from "components/PaymentMethod.vue";

export default {
  name: "InvoicesPage",

  components: {
    InvoiceItem,
    PaymentMethod,
  },

  data() {
    return {
      customerdetails: {
        user: {
          name: "Dipa Inhouse",
          email: "hello@dipainhouse.com",
        },

        address: {
          houseAddress: "Ijen Boulevard Street 101",
          city: "Malang City",
          postCode: "65115",
          state: "East Java",
          country: "Indonesia",
        },
      },

      invoiceDetails: {
        invoiceNumber: "INV-2022-010",
        issuedDate: "11 Jan 2022",
        dueDate: "18 Jan 2022",

        billingAddress: {
          name: "Zaky Grizzly",
          address: "Monlight Agency LTD",
          city: "New York",
          country: "USA",
        },
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

<style lang="scss" scoped>
.invoice-view {

  .user-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .username {
    font-size: 20px;
  }

  .invoice-summary {
    border-radius: 20px;
  }
}

@media screen and (max-width: 1400px) {
  .invoice-view {
    .invoice-summary {
      line-height: 1.5;
    }
  }
}

@media screen and (min-width: 1400px) {
  .invoice-view {
    line-height: 1.5;

    .invoice-summary {
      line-height: 2;
    }
  }
}
</style>
