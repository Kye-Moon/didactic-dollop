import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/primatives/Dialog";
import { cn } from "src/utils";
import { PlusIcon } from "lucide-react";
import { buttonVariants } from "@/components/primatives/Button/Button";
import NewProjectForm from "@/components/NewProjectDialog/NewProjectForm/NewProjectForm";
import * as React from "react";

/**
 * A Dialog component that allows the user to create a new project
 * @constructor
 */
const NewProjectDialog = () => {
  const [open, setOpen] = React.useState(false);
  const onFormSubmitComplete = async () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={cn(buttonVariants({ variant: "default" }))}>
        <PlusIcon className={"mr-2 h-4 w-4 shrink-0"} />
        New Project
      </DialogTrigger>
      <DialogContent className={"max-w-2xl"}>
        <DialogHeader>
          <DialogTitle>New project</DialogTitle>
        </DialogHeader>
        <NewProjectForm onFormSubmitComplete={onFormSubmitComplete} />
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectDialog;
