import { createServer, Model } from 'miragejs';

const HOST = process.env.VUE_APP_HOST;
const PORT = process.env.VUE_APP_PORT;

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
