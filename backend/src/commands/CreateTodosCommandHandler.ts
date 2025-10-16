import TodosRepository from "../repositories/TodosRepository";
import { ICommandHandler } from "./IcommandHandler";

export default class CreateTodosCommandHandler
  implements ICommandHandler<CreateTodosCommand, CreateTodosCommandResult>
{
  private todosRepository: TodosRepository;

  constructor() {
    this.todosRepository = new TodosRepository();
  }

  public async handle(
    command: CreateTodosCommand
  ): Promise<CreateTodosCommandResult> {
    const id = await this.todosRepository.createTodo(command);
    return { id };
  }
}

type CreateTodosCommand = {
  name: string;
  description: string;
  date: Date;
  status: "pending" | "completed";
};

type CreateTodosCommandResult = {
  id: string;
};
