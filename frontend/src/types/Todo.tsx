type Todo = {
  id: string;
  name: string;
  description?: string;
  date?: Date;
  status: "pending" | "completed";
};
