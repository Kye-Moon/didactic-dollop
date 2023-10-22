"use client";
import React from "react";
import { graphql } from "@/gql";
import * as z from "zod";
import { InferType } from "prop-types";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/primatives/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputWrapper from "@/components/FormInputWrapper/FormInputWrapper";
import { Input } from "@/components/primatives/Input";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LOGIN_MUTATION = graphql(`
  mutation LoginMutation($input: LoginInput!) {
    login(loginUserInput: $input) {
      access_token
    }
  }
`);
export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export type LoginInput = InferType<typeof loginSchema>;

export default function Login() {
  const router = useRouter();
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onError: (error) => {
      if (error.message === "Unauthorized") {
        toast.error("Whoops! Invalid email or password");
        form.setError("email", {
          type: "manual",
          message: "Invalid email or password",
        });
        form.setError("password", {
          type: "manual",
          message: "Invalid email or password",
        });
      }
    },
    onCompleted: (data) => {
      console.log(data);
      toast.success("Welcome back!");
      router.push("/projects");
    },
  });

  const onSubmit = async (values: LoginInput) => {
    loginMutation({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
    });
    console.log(values);
  };

  return (
    <>
      <div className="flex  min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormInputWrapper label={"Email"}>
                        <Input {...field} />
                      </FormInputWrapper>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormInputWrapper label={"Password"}>
                        <Input type={"password"} {...field} />
                      </FormInputWrapper>
                    )}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
