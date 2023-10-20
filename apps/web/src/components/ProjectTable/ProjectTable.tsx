"use client";

import DataTable from "@/components/DataTable/DataTable";
import { projectsTableColumns } from "@/components/ProjectTable/ProjectsTableColumns";

export const dynamic = "force-dynamic";

interface ProjectsTableProps {
  projects: any[];
}

/**
 * A table component that displays a list of projects
 * @param projects the list of projects to display
 * @constructor
 */
const ProjectsTable = ({ projects }: ProjectsTableProps) => {
  return (
    <DataTable
      searchColumn={"title"}
      searchPlaceholder={"Search project"}
      columns={projectsTableColumns}
      data={projects}
    />
  );
};

export default ProjectsTable;
