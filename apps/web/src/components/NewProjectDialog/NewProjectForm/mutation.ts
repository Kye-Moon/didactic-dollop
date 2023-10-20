import { graphql } from "@/gql";

export const CREATE_PROJECT = graphql(`
  #  mutation CreateProjectMutation($input: CreateProjectDto!) {
  #    createProject(input: $input) {
  #      id
  #      title
  #      customer
  #      priority
  #    }
  #  }
`);
