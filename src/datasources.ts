import { RESTDataSource } from 'apollo-datasource-rest';

export class AsoiafDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.REST_API;
  }

  public async getBooks() {
    return this.get('/books');
  }

  public async getCharacters() {
    return this.get('/characters');
  }
}
