export class RequestInfoModel {
  public uuid: string;
  public requestSpec: RequestSpec;
  public responseDescription: ResponceSpec;
  public IsFullInfo: boolean;
}
export class RequestSpec {
  public creationDateTime: Date;
  public method: string;
  public hostAndPath: string;
  public headers: Header[];
  public queryParams: QueryParam[];
  public sendAfterDateTime: Date;
  public body: string;
}
export class Header {
  public name: string;
  public value: string;
}
export class QueryParam {
  public name: string;
  public values: string[];

}
export class ResponceSpec {
  public creationDateTime: Date;
  public headers: Header[];
  public statusCode: number;
  public body: string;
}