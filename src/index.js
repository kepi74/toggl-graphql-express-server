import bodyParser from 'body-parser';
import connect from 'connect';
import graphqlHTTP from 'express-graphql';
import http from 'http';
import { graphqlConnect } from 'apollo-server-express';

import createReportsApi from './data/ReportsAPI';
import resolvers from './resolvers/mocks';

const reportsApiSchema = createReportsApi(resolvers);

const PORT = 3000;

const app = connect();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json());
app.use('/graphql', graphqlConnect({ schema: reportsApiSchema }));

app.use('/graphql-explorer', graphqlHTTP({
  schema: reportsApiSchema,
  graphiql: true,
}));

http.createServer(app).listen(PORT);
