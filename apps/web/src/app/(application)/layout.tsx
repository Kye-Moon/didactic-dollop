import React from "react";
import AppLayout from "@/layouts/AppLayout/AppLayout";

export default async function ApplicationLayout({ children }) {
  return <AppLayout>{children}</AppLayout>;
}
