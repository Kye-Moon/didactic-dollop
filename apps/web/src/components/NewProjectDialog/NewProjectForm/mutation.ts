import { graphql } from "@/gql";

export const CREATE_PROJECT = graphql(`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(createProjectInput: $input) {
      _id
      title
    }
  }
`);
