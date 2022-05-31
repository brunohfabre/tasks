import { User } from '../entities/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  create(data: ICreateUserDTO): void;
}

export { ICreateUserDTO, IUsersRepository };
