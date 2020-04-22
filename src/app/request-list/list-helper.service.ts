import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestInfoModel } from './models/request-info.model';
import { AppConfig, APP_CONFIG_INJECTION_TOKEN } from '../app-config.module';


@Injectable({
  providedIn: 'root'
})
export class ListHelperService {

  constructor(  @Inject(APP_CONFIG_INJECTION_TOKEN) private config: AppConfig,private httpClient: HttpClient) { }
  getCount():Observable<number>{
    return this.httpClient.get<number>(`${this.config.apiUrl}/exchanges`);
  }
  getData(skip: number, take:number):Observable<RequestInfoModel[]>{

    let params = new HttpParams().set('pageNumber',skip.toString()).set('pageSize',take.toString());
    return this.httpClient.get<RequestInfoModel[]>(`${this.config.apiUrl}/search`,{params:params} );
  }
}
