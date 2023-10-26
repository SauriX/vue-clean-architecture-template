import 'reflect-metadata'
import { IHttpAdapter } from './IHttpAdapter'
import axios, { AxiosInstance } from 'axios'
import { injectable } from 'inversify'

@injectable()
export class AxiosHttpAdapter implements IHttpAdapter {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create()
  }

  async get<T = any>(url: string, config?: any): Promise<T> {
    // eslint-disable-next-line no-console
    console.log('Haciendo fetch desde AxiosHttpAdapter')
    const response = await this.axiosInstance.get<T>(url, config)

    return response.data
  }

  // Implement other methods such as post, put, delete, etc., if needed.
}
