import type { Meta, StoryObj } from "@storybook/react";

import ProjectTable from "./ProjectTable";

const meta: Meta<typeof ProjectTable> = {
  component: ProjectTable,
};

export default meta;

type Story = StoryObj<typeof ProjectTable>;

export const Primary: Story = {
  args: {
    projects: [
      {
        id: 1,
        title: "Project 1",
        status: "OPEN",
        priority: "LOW",
        dueDate: "2021-08-01T00:00:00.000Z",
        customer: "Customer 1",
        description: "Project 1 description",
        createdAt: "2021-08-01T00:00:00.000Z",
        updatedAt: "2021-08-01T00:00:00.000Z",
      },
      {
        id: 2,
        title: "Project 2",
        status: "IN_PROGRESS",
        priority: "MEDIUM",
        dueDate: "2021-08-01T00:00:00.000Z",
        customer: "Customer 2",
        description: "Project 2 description",
        createdAt: "2021-08-01T00:00:00.000Z",
        updatedAt: "2021-08-01T00:00:00.000Z",
      },
    ],
  },
};
