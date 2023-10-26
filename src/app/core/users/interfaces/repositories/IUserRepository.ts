import { User } from 'src/app/core'

export interface IUserRepository {
  getUsers(): Promise<User[]>;
}
