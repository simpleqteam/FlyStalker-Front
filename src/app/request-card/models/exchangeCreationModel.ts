export class ExchangeCreationModel {
  constructor(
    public readonly method: HttpMethod,
    public readonly hostAndPath: string,
    public readonly headers: any,
    public readonly date: any,
    public readonly body: string
  ) { }
}

export enum HttpMethod {
  GET, POST, PUT, PATCH, DELETE, OPTIONS
}
