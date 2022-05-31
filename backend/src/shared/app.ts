import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import './container';

import { AppError } from '@shared/errors/AppError';

import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/users/:id', async (request, response) => {
//   const { id } = request.params;

//   const user = await prisma.user.findUnique({
//     where: {
//       id,
//     },
//   });

//   return response.json(user);
// });

// app.post('/users', async (request, response) => {
//   const { name, email, password } = request.body;

//   const user = await prisma.user.create({
//     data: {
//       name,
//       email,
//       password,
//     },
//   });

//   return response.json(user);
// });

// app.get('/tasks', async (request, response) => {
//   const tasks = await prisma.task.findMany();

//   return response.json(tasks);
// });

// app.post('/tasks', async (request, response) => {
//   const { description } = request.body;
//   const { authorization } = request.headers;

//   if (!authorization) {
//     return response.status(400).json({
//       type: 'error',
//       message: 'User not found.',
//     });
//   }

//   const task = await prisma.task.create({
//     data: {
//       description,
//       user_id: authorization,
//     },
//   });

//   return response.json(task);
// });

// app.post('/sessions', async (request, response) => {
//   const { email } = request.body;

//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   return response.json(user);
// });

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',

      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',

    message: 'Internal server error.',
  });
});

export { app };
