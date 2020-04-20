import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestInfoModel } from './models/request-info.model';


@Injectable({
  providedIn: 'root'
})
export class ListHelperService {

  constructor(private httpClient: HttpClient) { }
  getCount():Observable<number>{
    return this.httpClient.get<number>('url');
  }
  getData(skip: number, take:number):Observable<RequestInfoModel[]>{

    let params = new HttpParams().set('pageNumber',skip.toString()).set('pageSize',take.toString());
    return this.httpClient.get<RequestInfoModel[]>('url',{params:params} );
  }
}
