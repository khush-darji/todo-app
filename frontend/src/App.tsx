import { useEffect, useState } from "react";
import { GetTodos } from "./api/getTotods";
import TodoTable from "./components/data-table/todo-table";
import AddTodo from "./form/addTodo";
import { CreateTodos } from "./api/createTodos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [refetchFlag, setRefetchFlag] = useState(false);

  useEffect(() => {
    async function DoAsync(): Promise<void> {
      const result = await GetTodos();
      setTodos(result);
    }
    DoAsync();
  }, [refetchFlag]);

  async function handleSubmit(data: {
    name: string;
    description?: string;
    date?: string;
    status: "pending" | "completed";
  }) {
    await CreateTodos(data);
    setRefetchFlag(!refetchFlag);
  }

  return (
    <div className="container p-6 flex flex-col">
      <h3 className="text-2xl font-bold">Todo</h3>
      <AddTodo handleSubmit={(data) => handleSubmit(data)} />
      <TodoTable data={todos} />
    </div>
  );
}

export default App;
