export class RequestInfoModel {
  public UUID: string;
  public RequestSpec: RequestSpec;
  public ReqponceDescription: string;
}
export class RequestSpec {
  public CreationDateTime: Date;
  public Method: string;
  public HostAndPath: string;
  public Headers: Header[];
  public QueryParams: QueryParam[];
  public SendAfterDateTime: Date;
  public Body: string;
}
export class Header {
  public Name: string;
  public Value: string;
}
export class QueryParam {
  public Name: string;
  public Values: string;

}