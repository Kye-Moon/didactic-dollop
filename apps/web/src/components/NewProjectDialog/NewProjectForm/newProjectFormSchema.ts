import * as z from "zod";
import {InferType} from "prop-types";

export const newProjectFormSchema = z.object({
  title: z.string().max(50),
  customer: z.string().optional(),
  dueDate: z.date().optional(),
  priority: z.string().optional(),
})

export type NewProjectFormType = InferType<typeof newProjectFormSchema>;
