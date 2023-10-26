import { Container } from 'inversify'
import { TYPES } from 'src/config/types'
import { AxiosHttpAdapter, GetUsers, IHttpAdapter, IUserRepository, UserRepository } from 'src/app/core'

const container = new Container()

container.bind<IHttpAdapter>(TYPES.IHttpAdapter).to(AxiosHttpAdapter)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)
container.bind<GetUsers>(TYPES.GetUsers).to(GetUsers)

export { container }
