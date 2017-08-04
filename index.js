import bodyParser from 'body-parser';
import connect from 'connect';
import graphqlHTTP from 'express-graphql';
import http from 'http';
import { graphqlConnect } from 'apollo-server-express';

import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from 'graphql';

const DetailedReportType = new GraphQLObjectType({
  name: 'DetailedReport',
  description: 'Toggl Deatailed report',
  fields: () => ({
    totalGrand: {
      type: GraphQLInt,
      resolve: detail => detail.total_grand,
    },
    totalBillable: {
      type: GraphQLInt,
      resolve: detail => detail.total_billable,
    },
    totalCount: {
      type: GraphQLInt,
      resolve: detail => detail.total_count,
    },
    perPage: {
      type: GraphQLInt,
      resolve: detail => detail.per_page,
    },
    // total_currencies:[{currency:EUR,amount:128.07}],
  }),
});

const response = {
  total_grand: 23045000,
  total_billable: 23045000,
  total_count: 2,
  per_page: 50,
};

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Toggl api',
  fields: () => ({
    detailedReport: {
      type: DetailedReportType,
      resolve: (root) => response,
    },
  }),
});

const togglGraphQLSchema = new GraphQLSchema({
  query: QueryType,
});

const PORT = 3000;

const app = connect();


app.listen(4000);

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json());
app.use('/graphql', graphqlConnect({ schema: togglGraphQLSchema }));

app.use('/graphql-explorer', graphqlHTTP({
  schema: togglGraphQLSchema,
  graphiql: true
}));

http.createServer(app).listen(PORT);
