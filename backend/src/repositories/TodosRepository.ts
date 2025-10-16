import { ITodosRepository, Todo } from "./ITodosRepository";

const todos: Todo[] = [
  {
    id: "dbf2e580-85af-413f-94cc-fd687b84cb35",
    name: "Buy groceries",
    status: "pending",
    description: "Milk, Bread, Eggs",
    date: new Date("2025-10-15"),
  },
  {
    id: "dbf2e580-85af-413f-94cc-fd687b84cb32",
    name: "Go for a walk",
    status: "completed",
    description: "Evening walk in the park",
    date: new Date("2025-10-16"),
  },
];

export default class TodosRepository implements ITodosRepository {
  public async getTodos(): Promise<Todo[]> {
    return Promise.resolve([...todos]);
  }

  public async createTodo(todo: Omit<Todo, "id">): Promise<string> {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      ...todo,
    };

    todos.push(newTodo);
    return Promise.resolve(newTodo.id);
  }
}
