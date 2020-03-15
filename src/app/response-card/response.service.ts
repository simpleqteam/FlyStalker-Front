import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseInfoModel } from './model/response-info.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private httpClient:HttpClient) { }
  public getInfo(id:number):Observable<ResponseInfoModel>{
    return this.httpClient.get<ResponseInfoModel>('url/'+`${id}`)
  }
}
