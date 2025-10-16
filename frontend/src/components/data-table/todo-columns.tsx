"use client";

import { ColumnDef } from "@tanstack/react-table";

export const getTodoscolumns: ColumnDef<Todo>[] = [
  {
    accessorFn: (row) => row.name,
    header: "Name",
  },
  {
    accessorFn: (row) => row.description ?? "",
    header: "Description",
  },
  {
    accessorFn: (row) => row.date?.toString().split("T")[0] ?? "",
    header: "Date",
  },
  {
    accessorFn: (row) => row.status.toUpperCase(),
    header: "Status",
  },
];
