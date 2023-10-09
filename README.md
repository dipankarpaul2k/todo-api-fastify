# Todo API using Fastify

I am learning about APIs and CURD operations. This is a simple API for todo list using nodejs and fastify framework. I have used a fake data created by ChatGPT to build this API.

## Table of Contents

1. [Documentation](#documentation)
2. [Installation & Usage](#installation--usage)
3. [Endpoints](#endpoints)
4. [Author](#author)


## Documentation

I have used `Fasify-openApi-docs` plugin to generate docs autometically.

```
localhost:5000/docs/
```

## Installation & Usage

- Fork the repository in your account in Github.
- Make project directory and go inside the directory.
- Clone the repository.
- Install dependencies.
- Start or run your API on the local machine.
- Access the API in your browser or tools like Postman. I have used Rest Client VS Code extension.

```terminal
# Make a directory
mkdir todo-api-fastify

# go inside the directory
cd todo-api-fastify

# Clone the repo
git clone https://github.com/...

# Install dependencies
npm install

# Start the API
npm start

# Access the API in your web browser
http://localhost:5000/todos
```

## Endpoints

### GET

To get all the todos.
```
localhost:5000/todos
```
To get a single todo.
```
localhost:5000/todos/:todoId
```

### POST

To add a new todo.
```
localhost:5000/todos
```

### PUT

To update a single todo.
```
localhost:5000/todos/:todoId
```

### DELETE

To delete a single todo.
```
localhost:5000/todos/:todoId
```

## Author

Dipankar Paul | dipankarpaul2k@gmail.com