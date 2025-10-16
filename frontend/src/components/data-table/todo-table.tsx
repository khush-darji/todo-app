import { DataTable } from "./data-table";
import { getTodoscolumns } from "@/components/data-table/todo-columns";

interface TodoTableProps {
  data: Todo[];
}
export default function TodoTable({ data }: TodoTableProps) {
  return (
    <div className="mt-4">
      <DataTable<Todo> data={data} columns={getTodoscolumns} />
    </div>
  );
}
