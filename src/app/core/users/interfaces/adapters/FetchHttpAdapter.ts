import 'reflect-metadata'
import { injectable } from 'inversify'
import { IHttpAdapter } from 'src/app/core/users/interfaces/adapters/IHttpAdapter'

@injectable()
export class FetchHttpAdapter implements IHttpAdapter {
  async get<T = any>(url: string, config?: any): Promise<T> {
    // eslint-disable-next-line no-console
    console.log('Haciendo fetch desde FetchHttpAdapter')
    const response = await fetch(url, config)

    return response.json()
  }

  // Implement other methods such as post, put, delete, etc., if needed.
}
