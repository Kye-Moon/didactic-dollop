"use client";
import React, { Suspense } from "react";
import PageHeadingWithMetaAndActions from "@/components/partials/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/components/primatives/PageContentSection";
import ProjectTable from "@/components/ProjectTable/ProjectTable";
import NewProjectDialog from "@/components/NewProjectDialog/NewProjectDialog";

const projectPageActions: any[] = [
  {
    dialog: <NewProjectDialog />,
  },
];

export default function Dashboard() {
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
