import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const DetailedReportType = new GraphQLObjectType({
  name: 'DetailedReport',
  description: 'Toggl Deatailed report',
  fields: () => ({
    implementMe: {
      type: GraphQLString,
      resolve: () => 1,
    },
  }),
});

const detailedReport = resolve => ({
  type: DetailedReportType,
  resolve,
});

export default detailedReport;
