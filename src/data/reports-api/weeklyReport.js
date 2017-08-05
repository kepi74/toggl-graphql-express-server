import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const WeeklyReportType = new GraphQLObjectType({
  name: 'WeeklyReport',
  description: '',
  fields: () => ({
    implementMe: {
      type: GraphQLString,
      resolve: () => 1,
    },
  }),
});

const weeklyReport = resolve => ({
  type: WeeklyReportType,
  resolve,
});

export default weeklyReport;
