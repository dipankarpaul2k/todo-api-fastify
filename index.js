import Fastify from "fastify";
const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});
const PORT = 5000;

// IMPORT FASTIFY OPENAPI DOCS
import fastifyOpenapiDocs from "fastify-openapi-docs";

// IMPORT THE ROUTES PLUGIN
import { todoRoutes } from "./routes/todos.routes.js";

// REGISTER FASTIFY OPENAPI DOCS
fastify.register(fastifyOpenapiDocs, {
  openapi: {
    openapi: '3.0.3',
    info: {
      title: "Todo API | fastify",
      description: "API documentation for Todo API using Fastify.",
      contact: {
        name: 'Dipankar Paul',
        email: 'dipankarpaul2k@gmail.com'
      },
    },
  },
});

// REGISTER THE ROUTES PLUGIN
fastify.register(todoRoutes);

// START THE SERVER
const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    await fastify.close();
    process.exit(0);
  });
});

start();
