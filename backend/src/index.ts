import express from 'express';
import jsonServer from 'json-server';

import users from './data/users';
import skills from './data/skills';
import states from './data/states';
import genders from './data/genders';
import languages from './data/languages';

const server = jsonServer.create();
const router = jsonServer.router({ users, states, skills, genders, languages });
const middlewares = jsonServer.defaults();

server.use(router);
server.use(middlewares);

const app = express();
app.use(server);

const PORT = 8080;
app.listen(PORT, () => {
  console.log('🚀 Server is running on port', PORT);
});
