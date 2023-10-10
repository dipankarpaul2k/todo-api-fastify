// *API endpoints
import * as controller from "../controller/todos.controller.js";

// defining todos schema
const TodoSchema = {
  id: { type: "string" },
  title: { type: "string" },
  description: { type: "string" },
  tags: { type: "array" },
  status: { type: "string" },
};

// Options to get all todos (schema and handler)
const getTodosOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: TodoSchema,
        },
      },
    },
  },
  handler: controller.getTodos,
};

// Options to get a single todo (schema and handler)
const getTodoOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: TodoSchema,
      },
    },
  },
  handler: controller.getTodoById,
};

// Options to add a new todo (schema and handler)
const postTodoOpts = {
  schema: {
    body: {
      type: "object",
      required: ["title", "description"],
    },
    response: {
      200: {
        type: "object",
        properties: TodoSchema,
      },
    },
  },
  handler: controller.addTodo,
};

// Options to delete a todo (schema and handler)
const deleteTodoOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: controller.deleteTodoById,
};

// Options to update a todo (schema and handler)
const updateTodoOpts = {
  schema: {
    body: {
      type: "object",
      required: ["title", "description"],
    },
    response: {
      200: {
        type: "object",
        properties: TodoSchema,
      },
    },
  },
  handler: controller.updateTodoById,
};

// ROUTE PLUGIN FOR TODO
export function todoRoutes(fastify, options, done) {
  // Get all the todos
  fastify.get("/todos", getTodosOpts);

  // Get a single todo
  fastify.get("/todos/:todoId", getTodoOpts);

  // Add new todo
  fastify.post("/todos", postTodoOpts);

  // Delete a todo
  fastify.delete("/todos/:todoId", deleteTodoOpts);

  // Update a todo
  fastify.put("/todos/:todoId", updateTodoOpts);

  done();
}
