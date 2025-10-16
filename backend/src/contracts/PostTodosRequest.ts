import Joi from "joi";

export const BodyValidator = Joi.object<PostTodosRequestBody>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.date().required(),
  status: Joi.string().valid("pending", "completed").required(),
});

export type PostTodosRequestBody = {
  name: string;
  description: string;
  date: Date;
  status: "pending" | "completed";
};
