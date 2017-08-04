import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const ProjectDashboardType = new GraphQLObjectType({
  name: 'ProjectDashboard',
  description: '',
  fields: () => ({
    implementMe: {
      type: GraphQLString,
      resolve: () => 1,
    },
  }),
});

const projectDashboard = resolve => ({
  type: ProjectDashboardType,
  resolve,
});

export default projectDashboard;
