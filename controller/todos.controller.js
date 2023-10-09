import { fakeTodos } from "../fakeTodos.js";
// !ONE THING TO REMEMBER WHILE USING IMPORTED VARIABLES
// *IMPORTED VARIABLES ARE TREATED AS "READ ONLY" VARIABLES.
// *SO IN THIS CASE, YOU CAN NOT REASSIGN THE ENTIRE ARRAY
// *BUT YOU CAN USE NORMAL ARRAY METHODS(e.g. push, splice,...)
import { v4 as uuidv4 } from "uuid";

// *GET ALL TODOS
export async function getTodos(req, reply) {
  reply.send(fakeTodos);
}

// *GET A SINGLE TODO
export async function getTodoById(req, reply) {
  const { todoId } = req.params;
  const Todo = fakeTodos.find((todo) => todo.id === todoId);
  reply.send(Todo);
}

// *ADD A NEW TODO
export async function addTodo(req, reply) {
  const { title, description, tags, status } = req.body;

  const Todo = {
    id: uuidv4(),
    title,
    description,
    tags,
    status,
  };

  fakeTodos.push(Todo);

  reply.send(Todo);
}

// *DELETE A TODO
export async function deleteTodoById(req, reply) {
  const { todoId } = req.params;
  let index = fakeTodos.findIndex((todo) => todo.id === todoId);

  if (index !== -1) {
    fakeTodos.splice(index, 1);
  }

  reply.send({ message: `Todo id ${todoId} has been deleted.` });
}

// *UPDATE A TODO
export async function updateTodoById(req, reply) {
  const { todoId } = req.params;
  const { title, description, tags, status } = req.body;

  let updatedTodo = {
    id: todoId,
    title,
    description,
    tags,
    status,
  };

  let index = fakeTodos.findIndex((todo) => todo.id === todoId);

  if (index !== -1) {
    fakeTodos[index] = updatedTodo;
  }

  reply.send(updatedTodo);
}
