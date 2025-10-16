import TodosRepository from "../repositories/TodosRepository";
import { IQueryHandler } from "./IQueryHandler";

export default class GetTodosQueryHandler
  implements IQueryHandler<void, GetTodosQueryResult>
{
  private todosRepository: TodosRepository;

  constructor() {
    this.todosRepository = new TodosRepository();
  }

  public async handle(): Promise<GetTodosQueryResult> {
    const todos = await this.todosRepository.getTodos();
    return todos.map((todo) => ({
      id: todo.id,
      name: todo.name,
      description: todo.description,
      date: todo.date,
      status: todo.status,
    }));
  }
}

type GetTodosQueryResult = {
  id: string;
  name: string;
  description?: string;
  date?: Date;
  status: "pending" | "completed";
}[];
