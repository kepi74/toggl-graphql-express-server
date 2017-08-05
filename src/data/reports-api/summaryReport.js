import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const SummaryReportType = new GraphQLObjectType({
  name: 'SummaryReport',
  description: '',
  fields: () => ({
    implementMe: {
      type: GraphQLString,
      resolve: () => 1,
    },
  }),
});

const summaryReport = resolve => ({
  type: SummaryReportType,
  resolve,
});

export default summaryReport;
