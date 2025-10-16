import axios from "axios";

export async function CreateTodos(
  data: PostTodoRequestBody
): Promise<PostTodoResponse> {
  const response = await axios.post<PostTodoResponse>(
    "http://localhost:3000/v1/todos",
    data
  );
  return response.data;
}

type PostTodoRequestBody = {
  name: string;
  description?: string;
  date?: string;
  status: "pending" | "completed";
};

type PostTodoResponse = {
  id: string;
};
