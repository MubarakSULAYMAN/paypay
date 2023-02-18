import { createServer, Model } from 'miragejs';

const HOST = process.env.VUE_APP_HOST;
const PORT = process.env.VUE_APP_PORT;

export default ({ environment = 'development' } = {}) => {
  let server = createServer({
    environment,

    seeds(server) {
      server.db.loadData({
        paymentOptions: [
          { color: "info", iconRight: "fa-brands fa-paypal", label: "Paypal" },
          {
            color: "negative",
            iconRight: "fa-brands fa-google-pay",
            label: "Google Pay",
          },
          {
            color: "dark",
            iconRight: "fa-brands fa-apple-pay",
            label: "Apple Pay",
          },
          {
            color: "warning",
            iconRight: "fa-brands fa-amazon-pay",
            label: "Amazon Pay",
          },
          {
            color: "positive",
            iconRight: "fa-solid fa-money-bill",
            label: "Cash",
          },
        ],

        users: [{
          profile: {
            name: "Dipa Inhouse",
            email: "hello@dipainhouse.com",

            address: {
              houseAddress: "Ijen Boulevard Street 101",
              city: "Malang City",
              postCode: "65115",
              state: "East Java",
              country: "Indonesia",
            },
          },

          misc: {
            discount: 0,

            referralCode: '',
          },


          accountDetails: {
            accountName: "Barly Vallendito",
            accountNumber: "9700002342002900",
            routingNumber: "084009519",
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
          }
        }]
      })
    },

    routes() {
      this.urlPrefix = `http://${HOST}:${PORT}`;
      this.namespace = 'api';

      this.get('/users', (schema) => {
        return schema.users.all();
      });

      this.get('/users/:id', (schema) => {
        return schema.users.find(id);
      });

      this.get("/resources/payment-options", (schema, request) => {
        return schema.db.paymentOptions
      })

      this.get("/user/profile", (schema, request) => {
        return schema.db.users[0].profile
      })

      this.get("/user/misc", (schema, request) => {
        return schema.db.users[0].misc
      })

      this.get("/user/payment/card/details", (schema, request) => {
        return schema.db.users[0].accountDetails
      })

      this.get("/user/payment/invoice-details", (schema, request) => {
        return schema.db.users[0].invoiceDetails
      })
    },
  });

  return server;
}
