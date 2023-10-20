import { ColumnDef } from "@tanstack/react-table";

import { enumToSentenceCase } from "src/utils";
import { ArrowUpDown, EditIcon } from "lucide-react";
import { Button } from "@/components/primatives/Button/Button";
import Badge from "@/components/primatives/Badge/Badge";

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "IN_PROGRESS":
      return "blue";
    case "DONE":
      return "green";
    case "OPEN":
      return "yellow";
  }
};

const getPriorityBadgeVariant = (priority: string) => {
  switch (priority) {
    case "LOW":
      return "green";
    case "MEDIUM":
      return "yellow";
    case "HIGH":
      return "red";
  }
};

export const projectsTableColumns: ColumnDef<TData, TValue>[] = [
  {
    accessorKey: "title",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Badge
          size={"sm"}
          variant={getStatusBadgeVariant(row.getValue("status"))}
          text={enumToSentenceCase(row.getValue("status"))}
        />
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due date",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Badge
          size={"sm"}
          variant={getPriorityBadgeVariant(row.getValue("priority"))}
          text={
            row.getValue("priority")
              ? enumToSentenceCase(row.getValue("priority"))
              : "-"
          }
        />
      );
    },
  },
  {
    accessorKey: "total",
    header: "Total $",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const actions = [
        {
          label: "Edit",
          icon: <EditIcon className={"h-4 text-primary/50"} />,
        },
      ];
      return (
        <>actions</>
        // <ActionsDropMenu actions={actions}/>
      );
    },
  },
];
