import { User } from '../../entities/User';
import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository';

class InMemoryUsersRepository implements IUsersRepository {
  private items: User[] = [];

  private static INSTANCE: InMemoryUsersRepository;

  public static getInstance(): InMemoryUsersRepository {
    if (!InMemoryUsersRepository.INSTANCE) {
      InMemoryUsersRepository.INSTANCE = new InMemoryUsersRepository();
    }

    return InMemoryUsersRepository.INSTANCE;
  }

  findByEmail(email: string): User | undefined {
    const user = this.items.find(item => item.email === email);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.items.find(item => item.id === id);

    return user;
  }

  create({ name, email, password }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
    });

    this.items.push(user);
  }
}

export { InMemoryUsersRepository };
