export interface ITodosRepository {
  getTodos(): Promise<Todo[]>;
}

export type Todo = {
  id: string;
  name: string;
  description?: string;
  date?: Date;
  status: "pending" | "completed";
};
