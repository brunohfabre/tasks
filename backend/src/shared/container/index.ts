import { InMemoryUsersRepository } from '@modules/users/repositories/implementations/InMemoryUsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  InMemoryUsersRepository,
);
