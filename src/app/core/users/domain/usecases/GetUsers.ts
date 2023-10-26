import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { TYPES } from 'src/config/types'
import { IUserRepository } from 'src/app/core/users/interfaces/repositories/IUserRepository'
import { User } from 'src/app/core'

@injectable()
export class GetUsers {
  private _userRepository: IUserRepository

  constructor(@inject(TYPES.IUserRepository) private userRepository: IUserRepository) {
    this._userRepository = userRepository
  }

  async execute(): Promise<User[]> {
    return await this._userRepository.getUsers()
  }
}
