import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  handle(request: Request, response: Response): Response {
    const { name, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    createUserUseCase.execute({ name, email, password });

    return response.status(201).send();
  }
}

export { CreateUserController };
