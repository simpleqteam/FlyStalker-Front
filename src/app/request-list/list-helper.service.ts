import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.post<RequestInfoModel[]>('url',{pageNumber:skip,pageSize:take});
  }
}
