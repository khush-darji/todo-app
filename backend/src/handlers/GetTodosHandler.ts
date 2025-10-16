import GetTodosQueryHandler from "../queries/GetTodosQueryHandler";
import { Response } from "express";

export default class GetTodosHandler {
  private queryHandler: GetTodosQueryHandler;

  constructor() {
    this.queryHandler = new GetTodosQueryHandler();
  }

  public async handle(response: Response): Promise<void> {
    try {
      const results = await this.queryHandler.handle();
      response.status(200).json(results);
    } catch (err) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
