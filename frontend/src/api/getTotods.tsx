import axios from "axios";

export async function GetTodos(): Promise<GetTodoResponse> {
  const response = await axios.get<GetTodoResponse>(
    "http://localhost:3000/v1/todos"
  );
  return response.data;
}

type GetTodoResponse = {
  id: string;
  name: string;
  description?: string;
  date?: Date;
  status: "pending" | "completed";
}[];
