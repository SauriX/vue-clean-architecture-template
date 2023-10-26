import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { TYPES } from 'src/config/types'
import { IUserRepository } from 'src/app/core/users/interfaces/repositories/IUserRepository'
import { IHttpAdapter } from 'src/app/core/users/interfaces/adapters/IHttpAdapter'
import { User } from 'src/app/core'

@injectable()
export class UserRepository implements IUserRepository {
  private _httpAdapter: IHttpAdapter

  constructor(@inject(TYPES.IHttpAdapter) httpAdapter: IHttpAdapter) {
    this._httpAdapter = httpAdapter
  }

  async getUsers(): Promise<User[]> {
    // eslint-disable-next-line no-console
    console.log('devuelve datos desde ajax')

    const response = await this._httpAdapter.get('https://jsonplaceholder.typicode.com/users')

    return response.map(({
      id,
      name,
      username,
      email,
      phone,
      website,
      address,
      company
    }: User) => new User(
      id,
      name,
      username,
      email,
      phone,
      website,
      address,
      company
    ))
  }
}
