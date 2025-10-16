import { Request, Response } from "express";
import CreateTodosCommandHandler from "../commands/CreateTodosCommandHandler";
import { BodyValidator } from "../contracts/PostTodosRequest";

export default class PostTodosHandler {
  private commandHandler: CreateTodosCommandHandler;

  constructor() {
    this.commandHandler = new CreateTodosCommandHandler();
  }

  public async handle(request: Request, response: Response): Promise<void> {
    const { value, error } = BodyValidator.validate(request.body);
    if (error) {
      response.status(400).json({ error });
      return;
    }
    try {
      const results = await this.commandHandler.handle(value);
      response.status(201).json(results);
    } catch (err) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
