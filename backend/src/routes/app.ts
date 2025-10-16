import express from "express";
import cors from "cors";
import GetTodosHandler from "../handlers/GetTodosHandler";
import PostTodosHandler from "../handlers/PostTodosHandler";

export const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // allow everyone for this demo
  })
);
app.get("/v1/health", (_, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
  });
});

app.get("/v1/todos", (_, res) => {
  new GetTodosHandler().handle(res);
});

app.post("/v1/todos", (req, res) => {
  new PostTodosHandler().handle(req, res);
});
