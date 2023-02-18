<template>
  <q-layout view="hHh lpR fFf" class="app-layout-nav">
    <q-header class="bg-white text-black" reveal>
      <q-toolbar>
        <q-btn
          align="around"
          class="btn-fixed-width q-mx-xs q-ma-md-lg text-pp-purple text-h6 text-weight-bolder"
          label="Paypay."
          no-caps
          flat
        />

        <q-tabs
          inline-label
          shrink
          dense
          indicator-color="pp-purple"
          active-class="text-pp-purple"
        >
          <q-route-tab
            v-for="tab in tabs"
            :key="tab.name"
            v-bind="tab"
            no-caps
            active-class="paypay-active-route"
            class="route-tab q-px-xs q-py-sm q-px-md-sm q-py-md-md"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-pp-gray-light" style="background-color: $pp-gray-light;">
      <q-page class="q-px-sm q-py-xs q-px-md-xl q-py-md-md">
        <q-toolbar
          class="breadcrumb-toolbar q-mb-sm q-mb-md-md text-pp-gray"
          shrink
          style="border !important: 1px solid blue;"
        >
          <q-breadcrumbs
            align="left"
            active-color="text-pp-purple"
            class="text-weight-medium"
          >
            <q-breadcrumbs-el
              :label="breadcrumb.text"
              :to="!!breadcrumb?.link ? breadcrumb?.link : undefined"
              v-for="(breadcrumb, index) in breadcrumbs"
              :key="index"
              :class="{
                'text-pp-purple': $router.currentRoute.path.startsWith(
                  breadcrumb?.link
                ),
              }"
            />
          </q-breadcrumbs>
        </q-toolbar>
        <q-card-section class="app-content q-pa-sm q-pa-md-lg bg-white">
          <router-view />
        </q-card-section>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "AppLayout",

  data() {
    return {
      tabs: [
        {
          icon: "grid_view",
          label: "Dashboard",
          to: "/app/dashboard",
          ripple: { center: true, color: "yellow" },
        },
        {
          icon: "fa-regular fa-file-lines",
          label: "Invoices",
          to: "/app/invoices",
          ripple: { center: true, color: "yellow" },
        },
        {
          icon: "account_balance_wallet",
          label: "Wallet",
          to: "/app/wallet",
          ripple: { center: true, color: "yellow" },
        },
        {
          icon: "analytics",
          label: "Activity",
          to: "/app/activity",
          ripple: { center: true, color: "yellow" },
        },
        {
          icon: "fa-solid fa-phone",
          label: "Help",
          to: "/app/help",
          ripple: { center: true, color: "yellow" },
        },
      ],
    };
  },

  computed: {
    breadcrumbs() {
      return this.$store.state.breadcrumbs.breadcrumbs;
    },
  },
};
</script>

<style lang="scss">
.app-layout-nav {
  .route-tab {
    i.q-tab__icon {
      color: $pp-gray;
    }

    &.paypay-active-route {
      i.q-tab__icon {
        color: $pp-purple;
      }
    }
  }

  .app-content {
    border-radius: 16px;
  }
}
</style>

<style lang="scss" scoped></style>
