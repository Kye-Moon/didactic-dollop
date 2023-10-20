"use client";
import React, { Suspense } from "react";
import PageHeadingWithMetaAndActions from "@/components/partials/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/components/primatives/PageContentSection";
import ProjectTable from "@/components/ProjectTable/ProjectTable";
import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";
import NewProjectDialog from "@/components/NewProjectDialog/NewProjectDialog";

const projectPageActions: any[] = [
  {
    dialog: <NewProjectDialog />,
  },
];

const query = graphql(/* GraphQL */ `
  query MyQuery {
    helloworld
  }
`);

export default function Dashboard() {
  const { data, error, loading } = useQuery(query);

  return (
    <>
      <PageHeadingWithMetaAndActions
        pageHeading={"Projects"}
        actions={projectPageActions}
      />
      <PageContentSection className={" "}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectTable projects={[]} />
        </Suspense>
      </PageContentSection>
    </>
  );
}
