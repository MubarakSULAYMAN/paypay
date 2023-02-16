// // import something here

// // "async" is optional;
// // more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
// }

import { createServer, Model } from 'miragejs';

const HOST = process.env.VUE_APP_HOST;
const PORT = process.env.VUE_APP_PORT;

// export function makeServer({ environment = 'development' } = {}) {
export default ({ environment = 'development' } = {}) => {
  let server = createServer({
    environment,
    models: {
      user: Model,
    },

    seeds(server) {
      server.create('user', { name: 'Bob' });
      server.create('user', { name: 'Alice' });
    },

    routes() {
      this.urlPrefix = `http://${HOST}:${PORT}`;
      this.namespace = 'api';

      this.get('/users', (schema) => {
        return schema.users.all();
      });
    },
  });

  return server;
}
