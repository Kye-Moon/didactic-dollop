import { FieldPathValue, useForm } from "react-hook-form";
import { Form, FormField } from "@/components/primatives/Form";
import { Input } from "@/components/primatives/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomerSelect from "src/components/CustomerSelect/CustomerSelect";
import * as React from "react";
import FormInputWrapper from "src/components/FormInputWrapper/FormInputWrapper";
import DatePicker from "src/components/DatePicker/DatePicker";
import DropSelect from "@/components/DropSelect/DropSelect";
import { priorityOptions } from "@/lib/constants";
import {
  newProjectFormSchema,
  NewProjectFormType,
} from "./newProjectFormSchema";
// import { CREATE_PROJECT } from "src/services/projects";
// import {
//   CreateProjectMutation,
//   CreateProjectMutationVariables,
// } from "types/graphql";
import LoadingButton from "src/components/Loading/LoadingButton/LoadingButton";

/**
 * Props for the NewProjectForm component
 */
interface NewProjectFormProps {
  /**
   * Function to call when the form is submitted, used to close the modal and perform any other actions
   */
  onFormSubmitComplete?: () => void;
}

/**
 * A form component that allows the user to create a new project
 * @param onFormSubmitComplete
 * @constructor
 */
const NewProjectForm = ({ onFormSubmitComplete }: NewProjectFormProps) => {
  // The createProject mutation
  // const [createProject, { loading }] = useMutation<>(CREATE_PROJECT, {
  //   onCompleted: () => {
  //     toast.success("Project created");
  //     onFormSubmitComplete?.();
  //   },
  //   onError: () => {
  //     toast.error("Error creating project");
  //     onFormSubmitComplete?.();
  //   },
  //   refetchQueries: ["ProjectsQuery"],
  // });

  // The form hook for the NewProjectForm
  const form = useForm<NewProjectFormType>({
    resolver: zodResolver(newProjectFormSchema),
  });

  async function onSubmit(values: NewProjectFormType) {
    // await createProject({
    //   variables: {
    //     input: {
    //       title: values.title,
    //       dueDate: values.dueDate,
    //       priority: values.priority,
    //       customer: values.customer,
    //     },
    //   },
    // });
  }

  // helper function to set the value of a field in the form
  const onValueChange = (
    fieldName: string,
    value: FieldPathValue<typeof newProjectFormSchema, string>,
  ) => {
    form.setValue(fieldName, value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormInputWrapper label={"Title"}>
                  <Input {...field} />
                </FormInputWrapper>
              )}
            />
          </div>
          <div className="sm:col-span-3">
            <FormField
              control={form.control}
              name="customer"
              render={({ field }) => (
                <FormInputWrapper label={"Customer"}>
                  <CustomerSelect
                    setValue={(value) => onValueChange(field.name, value)}
                    value={field.value}
                  />
                </FormInputWrapper>
              )}
            />
          </div>
          <div className="sm:col-span-3">
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormInputWrapper label={"Due date"}>
                  <DatePicker
                    onChange={(value) => onValueChange(field.name, value)}
                    value={field.value}
                  />
                </FormInputWrapper>
              )}
            />
          </div>
          <div className="sm:col-span-3">
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormInputWrapper label={"Priority"}>
                  <DropSelect
                    options={priorityOptions}
                    placeholder={"Priority"}
                    defaultValue={field.value}
                    onChange={field.onChange}
                  />
                </FormInputWrapper>
              )}
            />
          </div>
        </div>
        <div className={"flex justify-end"}>
          <LoadingButton
            label={"Submit"}
            loadingStatus={false}
            type={"submit"}
          />
        </div>
      </form>
    </Form>
  );
};

export default NewProjectForm;
