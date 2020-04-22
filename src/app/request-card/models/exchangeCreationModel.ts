export class ExchangeCreationModel {
  constructor(
    public readonly method: HttpMethod,
    public readonly hostAndPath: string,
    public readonly headers: any,
    public readonly date: any,
    public readonly body: string,
    public readonly params: any
  ) { }
}

export enum HttpMethod {
  GET, POST, PUT, PATCH, DELETE, OPTIONS
}
