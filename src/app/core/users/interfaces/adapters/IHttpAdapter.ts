export interface IHttpAdapter {
  get<T = any>(url: string, config?: any): Promise<T>;
  // Define other HTTP methods as needed (post, put, delete, etc.)
}
