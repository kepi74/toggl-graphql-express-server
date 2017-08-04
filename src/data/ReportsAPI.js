import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import weeklyReport from './reports-api/weeklyReport';
import detailedReport from './reports-api/detailedReport';
import summaryReport from './reports-api/summaryReport';
import projectDashboard from './reports-api/projectDashboard';

const createReportsApi = (resolvers) => {
  const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Toggl Reports API',
    fields: () => ({
      weeklyReport: weeklyReport(resolvers.weeklyReport),
      detailedReport: detailedReport(resolvers.detailedReport),
      summaryReport: summaryReport(resolvers.summaryReport),
      projectDashboard: projectDashboard(resolvers.projectDashboard),
    }),
  });

  const reportsApiSchema = new GraphQLSchema({
    query: QueryType,
  });

  return reportsApiSchema;
};

export default createReportsApi;
